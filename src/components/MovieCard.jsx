const MovieCard = ({ movie }) => {
  const handleDownload = () => {
    window.open(movie.downloadUrl, "_blank");
  };

  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition cursor-pointer">
        <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-72 object-fit"
        onClick={handleDownload}
        />

        <div className="p-3">
        <h3 className="text-white font-semibold">
            {movie.title}
        </h3>
        <p className="text-white text-sm">{movie.description}</p>

        <button
            onClick={handleDownload}
            className="mt-2 w-full bg-red-600 text-white py-1 rounded-lg hover:bg-red-700"
        >
            Download
        </button>
        </div>
    </div>
  );
};

export default MovieCard;