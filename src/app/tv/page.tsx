import { fetchTvCategories } from "@/data/services";
import { bebasNeue } from "@/app/ui/fonts";
import TvCardBlock from "../ui/blocks/TvCardBlocks";

export default async function Movies() {
    const { results: tvList } = await fetchTvCategories();
    return (
        <div className="container">
            <h1 className={`${bebasNeue.className} text-3xl text-white`}>TV Shows</h1>
            <TvCardBlock results={tvList} />
        </div>
    );
}