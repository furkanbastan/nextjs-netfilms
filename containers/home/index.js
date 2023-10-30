import FeaturedMovie from '@/components/featured-movie'
import Categories from '@/components/categories';
import MoviesSection from '@/components/movies-section';

function HomeContainer({ selectedCategory, popularMovies, topRatedMovies, categories }) {
    return (
        <div>
            <FeaturedMovie movie={popularMovies[Math.floor(Math.random() * popularMovies.length)]} />
            <Categories categories={categories.slice(0, 5)} />
            {selectedCategory && <MoviesSection title={categories.find(g => g.id.toString() === selectedCategory.id)?.name} movies={selectedCategory.movies} />}
            <MoviesSection title="Popular Films" movies={popularMovies.slice(1, 7)} />
            <MoviesSection title="Your Favorites" movies={topRatedMovies.slice(1, 7)} />
        </div>
    )
}

export default HomeContainer;