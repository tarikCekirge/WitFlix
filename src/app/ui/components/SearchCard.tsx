import { SearchResult } from "@/types";
import Image from "next/image";
import { bebasNeue } from "../fonts";
import PlayButton from "../atoms/PlayButton";

interface SearchCardProps {
    result: SearchResult;
}

export default function SearchCard({ result }: SearchCardProps) {
    return (
        <article className="mb-8">
            <div className="grid grid-cols-[100px_1fr]  lg:grid-cols-[200px_1fr] gap-2">
                <div>
                    <Image className="w-full" layout="intrinsic" width={200} height={150} alt={result.title?.toString() || "No Title"} src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                    />
                </div>
                <div>
                    <h3 className={`${bebasNeue.className} text-xl lg:text-3xl text-wit-600`}>{result.title || result.name}</h3>
                    <p className="lg:text-lg lg:max-w-xl line-clamp-3 leading-tight mb-4">{result.overview}</p>
                    <PlayButton size="small" url={`${result.media_type === "movie" ? "movies" : "tv"}/${result.id}`} />
                </div>
            </div>
        </article>
    );
}



{/* <article>
<h3>{result.title || result.name}</h3>
<p>{result.overview}</p>
<img
    src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
    alt={result.title || result.name}
/>
<p>Rating: {result.vote_average}</p>
<p>Release Date: {result.release_date || result.first_air_date}</p>
</article> */}