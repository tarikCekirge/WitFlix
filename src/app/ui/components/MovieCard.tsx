import PlayButton from "../atoms/PlayButton";

export default function MovieCard() {
    return (
        <article
            className=" p-4 rounded-lg bg-black overflow-hidden aspect-[4/3] flex flex-col gap-2 items-start justify-center bg-center bg-cover"
            style={{ backgroundImage: `url("")` }}
        >
            <h2 className="text-2xl font-[700]">Movie Name</h2>
            <div className="flex gap-2 items-center mb-2">
                <span className="text-xs px-1.5 pt-1.5 pb-0.5 leading-none border rounded-sm">16+</span>
                <span className="text-sm">2hr 21mn</span>
            </div>
            <PlayButton size="small" url="/" />
        </article>
    );
}
