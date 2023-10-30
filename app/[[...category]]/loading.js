import FeaturedMovieLoading from "@/components/featured-movie/loading";
import MoviesSectionLoading from "@/components/movies-section/loading";
import CategoriesLoading from '@/components/categories/loading'

function HomeLoading(){
    return (
        <>
            <FeaturedMovieLoading/>
            <CategoriesLoading/>
            <MoviesSectionLoading/>
            <MoviesSectionLoading/>
            <MoviesSectionLoading/>
        </>
    )
}

export default HomeLoading;