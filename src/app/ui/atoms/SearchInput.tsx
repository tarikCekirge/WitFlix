"use client";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import clsx from 'clsx';
export default function Search() {
    const [searchQuery, setSearchQuery] = useState("");

    // Adjust the type to handle the input change event correctly
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <>
            <div className={clsx(
                'border-b flex gap-2 py-1 border-b-white/25',
                {
                    'border-b-white/65': searchQuery.length >= 3,
                },
            )}>
                <input
                    onChange={handleInputChange}
                    type="text"
                    className="bg-transparent text-sm placeholder:text-sm outline-none text-[#eee]"
                    placeholder="Search Movie"
                />
                <button
                    disabled={searchQuery.length < 3}
                    className="text-xl text-[#eee] disabled:opacity-60 cursor-pointer disabled:cursor-auto"
                >
                    <IoIosSearch />
                </button>
            </div>
        </>
    );
}
