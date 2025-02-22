import { fetchTrendingMovies } from "@/data/services";
import MovieCardBlock from "../ui/blocks/MovieCardBlocks";
import { bebasNeue } from "../ui/fonts";

export default async function Movies() {
    const { results: trendingMovies } = await fetchTrendingMovies();
    return (
        <div className="container">
            <h1 className={`${bebasNeue.className} text-3xl text-white`}>Movies</h1>
            <MovieCardBlock results={trendingMovies} />
        </div>
    );
}