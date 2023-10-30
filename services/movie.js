const baseUrl = process.env.API_BASE_URL;
const apiKey = process.env.API_KEY

async function delay(ms) {
    new Promise((resolve) => setTimeout(resolve, ms))
}

async function fetchData(path, { query = "" } = {}) {
    await delay(2000)

    try {
        const res = await fetch(`${baseUrl}${path}?api_key=${apiKey}&${query}`);
        return res.json();
    } catch (error) {
        throw new Error(error)
    }
}

export async function fetchGenres() {
    try {
        const res = await fetchData("/genre/movie/list");
        return res.genres;
    } catch (error) {
        throw new Error("Error happened while fetching genres", error);
    }
}

export async function fetchTopRatedMovies() {
    try {
        const res = await fetchData("/movie/top_rated");
        return res.results;
    } catch (error) {
        throw new Error("Error happened while fetching top rated movies", error);
    }
}

export async function fetchPopularMovies() {
    try {
        const res = await fetchData("/movie/popular");
        return res.results;
    } catch (error) {
        throw new Error("Error happened while fetching popular movies", error);
    }
}

export async function fetchSingleMovie(movieId) {
    try {
        const res = await fetchData(`/movie/${movieId}`);
        return res;
    } catch (error) {
        throw new Error("Error happened while fetching top rated movies", error);
    }
}

export async function fetchMoviesByGenre(genreId) {
    try {
        const res = await fetchData(`/discover/movie`, {
            query: `with_genres=${genreId}`,
        });
        return res.results;
    } catch (error) {
        throw new Error("Error happened while fetching top rated movies", error);
    }
}