import React from "react";
import movies from '../movies'
import MovieCard from "../components/MovieCard";

const Home = () => {
  return (
    <div className="bg-black min-h-screen p-6">
        <h1 className="text-white text-2xl font-bold mb-6">
        Pelli Movies
       </h1>

       <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;