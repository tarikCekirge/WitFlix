import { TVShow } from "@/types";
import TvCard from "../components/TvCard";

interface CardBlockProps {
    results: TVShow[],
    title: string
}

export default function TvCardBlock({ title, results }: CardBlockProps) {
    return (
        <section className="py-8 px-[6%]">
            <h2 className="text-3xl mb-3">{title}</h2>
            <div className="flex flex-row flex-nowrap overflow-y-auto gap-4 pb-4 ">

                {
                    results.map((tv) => (
                        <TvCard id={tv.id}
                            key={tv.id}
                            name={tv.name}
                            backdrop={tv.backdrop_path}
                            vote={tv.vote_average} />
                    ))
                }

            </div>
        </section>
    )
}