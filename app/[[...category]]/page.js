import HomeContainer from "@/containers/home";

import {
    fetchPopularMovies,
    fetchTopRatedMovies,
    fetchGenres,
    fetchMoviesByGenre,
} from "@/services/movie";

async function HomePage({ params }) {
    const pagePromises = [fetchPopularMovies(), fetchTopRatedMovies(), fetchGenres()]
    
    params.category && pagePromises.push(fetchMoviesByGenre(params.category[0]))

    const [popularMovies, topRatedMovies, genres, selectedCategoryMovies] = await Promise.all(pagePromises)

    return (
        <HomeContainer
            selectedCategory={params.category && { id: params.category[0], movies: selectedCategoryMovies }}
            popularMovies={popularMovies}
            topRatedMovies={topRatedMovies}
            categories={genres} />
    );
}

export default HomePage;