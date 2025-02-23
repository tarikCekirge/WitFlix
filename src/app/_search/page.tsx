"use client";

import { fetchSearch } from "@/data/services";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SearchResult } from "@/types";

export default function Search() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q");
    const [results, setResults] = useState<SearchResult[] | null>(null);

    useEffect(() => {
        if (query) {
            fetchSearch(query).then(setResults).catch(console.error);
        }
    }, [query]);

    return (
        <div className="container">
            asdasd
        </div>
    );
}
