import Hero from "../ui/components/Hero";
import MovieCard from "../ui/components/MovieCard";

export default function HomeContainer() {
    return <>
        <div className="container">
            <Hero />
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-8 px-[6%]">
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </section>
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-8 px-[6%]">
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </section>
        </div>
    </>
}