import { fetchTvById } from "@/data/services";
import { bebasNeue } from "../ui/fonts";
import { Genre, TVShow } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";



export default async function TvDetailContainer({ slug }: { slug: number }) {
    const tv: TVShow = await fetchTvById(slug);
    if (!tv) notFound();
    return (
        <section className="pb-6">
            <div className="container">
                <div className="rounded-lg overflow-hidden mb-6">
                    <Image
                        width="1416"
                        height="796"
                        sizes="100vw"
                        className="w-full h-auto"
                        alt={tv.name}
                        src={`https://image.tmdb.org/t/p/w500${tv.backdrop_path}`}
                    />
                </div>
                <div className="px-[6%]">
                    <h1 className={`${bebasNeue.className} text-5xl text-wit-600`}>{tv.name}</h1>
                    <h2 className={`${bebasNeue.className} text-3xl text-white`}>{tv.tagline}</h2>
                    <p className="text-lg my-4">{tv.overview}</p>
                    <div>
                        <div>
                            <h3 className={`${bebasNeue.className} text-lg text-white inline-block mr-2`}>Vote:</h3>
                            {tv.vote_average}
                        </div>
                        <div>
                            <h3 className={`${bebasNeue.className} text-lg text-white inline-block mr-2`}>Release Date:</h3>
                            {tv.first_air_date.split("-").reverse().join(" ")}
                        </div>
                        <h3 className={`${bebasNeue.className} text-lg text-white inline-block mr-2`}>Languages:</h3>
                        {tv.spoken_languages.map((lang, i) => (
                            <span className="mr-2" key={i}>{lang.english_name}</span>
                        ))}
                    </div>
                    <div>
                        <h3 className={`${bebasNeue.className} text-lg text-white inline-block mr-2`}>Categories:</h3>
                        {tv.genres.map((genre: Genre) => (
                            <span key={genre.id} className="text-[#eee] mr-3">
                                {genre.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
}
