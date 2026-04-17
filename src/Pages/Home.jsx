import movies from '../movies'
import MovieCard from "../components/MovieCard";

const Home = () => {
  return (
    <div className="bg-black min-h-screen p-6">
        <div className="mb-6">
            <h1 className="text-white text-2xl font-bold">
            Pelli Movies
            </h1>
            <p className="text-2 text-amber-50">Welcome to pelli movies "No ads, No delayed downloads"</p>
        </div>

       <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;