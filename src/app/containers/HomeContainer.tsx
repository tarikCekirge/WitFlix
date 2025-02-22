import CardBlock from "../ui/blocks/MovieCardBlocks";
import Hero from "../ui/components/Hero";
import { fetchTrendingMovies } from "@/data/services";

export default async function HomeContainer() {
    const { results: trendingMovies } = await fetchTrendingMovies();
    return (
        <div className="container">
            <Hero />
            <CardBlock results={trendingMovies} />
        </div>
    );
}
