import { TVShow } from "@/types";
import TvCard from "../components/TvCard";

interface CardBlockProps {
    results: TVShow[];

}

export default function TvCardBlock({ results }: CardBlockProps) {
    console.log(results)
    return (
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-8 px-[6%]">

            {
                results.map((tv) => (
                    <TvCard id={tv.id}
                        key={tv.id}
                        name={tv.name}
                        backdrop={tv.backdrop_path}
                        vote={tv.vote_average} />
                ))
            }

        </section>
    )
}