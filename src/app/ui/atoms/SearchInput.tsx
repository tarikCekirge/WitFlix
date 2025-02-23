"use client";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import clsx from 'clsx';
import { useRouter } from "next/navigation";

export default function Search() {
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = () => {
        if (searchQuery.length >= 3) {
            router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <>
            <div className={clsx(
                'border-b flex gap-2 py-1 border-b-white/25 order-last md:order-none',
                {
                    'border-b-white/65': searchQuery.length >= 3,
                },
            )}>
                <input
                    onChange={handleInputChange}
                    type="text"
                    className="bg-transparent text-sm placeholder:text-sm outline-none text-[#eee] flex-1"
                    placeholder="Search Movie"
                />
                <button onClick={handleSearch}
                    disabled={searchQuery.length < 3}
                    className="text-xl text-[#eee] disabled:opacity-60 cursor-pointer disabled:cursor-auto"
                >
                    <IoIosSearch />
                </button>
            </div>
        </>
    );
}
