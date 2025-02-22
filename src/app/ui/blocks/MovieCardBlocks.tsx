import { Movie } from "@/types";
import MovieCard from "../components/MovieCard";

interface CardBlockProps {
    results: Movie[];
}

export default function MovieCardBlock({ results }: CardBlockProps) {
    return (
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-8 px-[6%]">
            {results?.map((movie) => (
                <MovieCard
                    id={movie.id}
                    key={movie.id}
                    title={movie.title}
                    releaseDate={movie.release_date}
                    overview={movie.overview}
                    rating={movie.vote_average}
                    imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    backdropUrl={movie.backdrop_path}
                />
            ))}
        </section>
    );
}
