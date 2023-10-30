import MovieContainer from '@/containers/movie';
import Movies from '@/mocks/movies.json'
import { notFound } from 'next/navigation';

import { fetchSingleMovie } from "@/services/movie";

async function MoviePage({ params, searchParams }) {
    const movieDetail = await fetchSingleMovie(params.id);

    if (movieDetail.success === false) {
        notFound();
    }
    if (searchParams.error === "true") {
        throw new Error("Something went wrong!");
    }

    return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;