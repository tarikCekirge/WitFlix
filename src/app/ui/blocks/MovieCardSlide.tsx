import { Movie } from "@/types";
import MovieCard from "../components/MovieCard";

interface CardBlockProps {
    results: Movie[];
    title: string
}

export default function MovieCardBlock({ results, title }: CardBlockProps) {
    return (
        <section className="py-8 px-[6%]">
            <h2 className="text-3xl mb-3">{title}</h2>
            <div className="flex flex-row flex-nowrap overflow-y-auto gap-4  pb-4">
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
            </div>
        </section>
    );
}
