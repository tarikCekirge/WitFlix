import PlayButton from "../../atoms/PlayButton";



interface HeroProps {
    trends: any[];
}
export default function Hero({ trends }: HeroProps) {
    const randomTrend = Math.floor(Math.random() * trends.length)
    const trend = trends[randomTrend]
    console.log(trend)
    return (
        <div className="py-16 md:py-32 lg:py-48 bg-black px-6 lg:px-12 rounded-xl overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${trend.backdrop_path})` }}>
            <h1 className="text-3xl lg:text-5xl font-[500] mb-3">{trend.name || trend.title}</h1>
            <div className="lg:w-1/2">
                <p className="line-clamp-3">{trend.overview}</p>
                <div className="py-3">
                    <p className="text-sm"><span className="text-wit-600 font-[400] mr-2">Category</span>: <span>{trend.media_type.charAt(0).toUpperCase() + trend.media_type.slice(1)}</span> </p>
                </div>
                {
                    trend.media_type === "movie"
                        ? <PlayButton size="base" url={`movies/${trend.id}`} />
                        : <PlayButton size="base" url={`tv/${trend.id}`} />
                }

            </div>
        </div>
    )
}