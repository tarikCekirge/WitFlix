import { fetchSearch } from "@/data/services";
import SearchCard from "../ui/components/SearchCard";
import { SearchResult } from "@/types";
import { bebasNeue } from "../ui/fonts";


export default async function Search(props: {
    searchParams?: Promise<{
        q?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.q || '';

    const searchResults: SearchResult[] = await fetchSearch(query);
    console.log(searchResults);

    return (
        <section className="container">
            <div className="py-8 lg:px-[6%]">
                {searchResults.length === 0 ? (
                    <p>Sonuç bulunamadı</p>
                ) : (
                    <>
                        <h2 className={`${bebasNeue.className} text-xl lg:text-3xl text-white mb-6`}>Search: <span className="text-wit-600">{query}</span></h2>
                        {searchResults.map((result, id) => (
                            <SearchCard key={id} result={result} />
                        ))}
                    </>
                )}
            </div>
        </section>
    );
}
