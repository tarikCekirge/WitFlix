import CardBlock from "../ui/blocks/MovieCardBlocks";
import MovieCardSlide from "../ui/blocks/MovieCardSlide";
import TvCardBlock from "../ui/blocks/TvCardBlocks";
import TvCardSlide from "../ui/blocks/TvCardSlide";
import Hero from "../ui/components/Hero";
import { fecthAllTrends, fetchTrendingMovies, fetchTrendingTv } from "@/data/services";

export default async function HomeContainer() {
    const [allTrendsResponse, trendingMoviesResponse, trendingTvResponse] = await Promise.all([
        fecthAllTrends(),
        fetchTrendingMovies(),
        fetchTrendingTv()
    ]);

    const { results: allTrends } = allTrendsResponse;
    const { results: trendingMovies } = trendingMoviesResponse;
    const { results: trendingTv } = trendingTvResponse;

    return (
        <div className="container">
            <Hero trends={allTrends} />
            <MovieCardSlide title=" Movies" results={trendingMovies} />
            <TvCardSlide title=" Tv Shows" results={trendingTv} />
        </div>
    );
}
