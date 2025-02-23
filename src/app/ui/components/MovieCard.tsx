import Image from "next/image";
import PlayButton from "../atoms/PlayButton";

interface MovieCardProps {
    id: number,
    title: string;
    releaseDate: string;
    overview: string;
    rating: number;
    imageUrl: string;
    backdropUrl: string;
}

export default function MovieCard({
    id,
    title,
    releaseDate,
    overview,
    rating,
    imageUrl,
}: MovieCardProps) {
    return (
        <article
            className="relative isolate group min-w-[360px]  py-4 px-6 rounded-lg bg-black overflow-hidden aspect-[4/3] flex flex-col items-start justify-end bg-center bg-cover" >
            <h2 className="text-xl font-[700] mb-2">{title}</h2>
            <div className="flex gap-2 items-center mb-2 ">
                <span className="text-xs px-1.5 pt-1.5 pb-0.5 leading-none border rounded-sm">
                    {rating.toFixed(2)}
                </span>
                <span className="text-sm leading-none mt-0.5">{releaseDate.split("-").reverse().join(" ")}</span>
            </div>
            <p className="text-sm mb-4 line-clamp-1">{overview}</p>
            <PlayButton size="small" url={`movies/${id}`} />
            <Image
                src={`https://image.tmdb.org/t/p/w500${imageUrl}`}
                alt={title}
                width={400}
                height={400}
                sizes="100vw"
                className="rounded-lg aspect-[4/3] group-hover:scale-110 group-hover:opacity-50 transition-all  object-cover absolute inset-0 w-full -z-[2] "
            />
            <span className="black-grad  absolute inset-0 group-hover:opacity-100 -z-[1] block transition-opacity"></span>
        </article>
    );
}
