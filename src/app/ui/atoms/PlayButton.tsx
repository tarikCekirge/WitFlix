import type { PlayButton } from "@/types";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";


export default function PlayButton({ size, url, text = "Details" }: PlayButton) {

    const sizeClass = size === 'small' ? 'px-3 py-2  text-[14px]' : size === 'base' ? 'px-4 py-2 text-[15px]' : 'px-5 py-3';

    const commonClasses = 'flex items-center space-x-2 bg-wit-700 hover:bg-wit-600 transition-colors text-white rounded-md w-fit';

    return (
        <Link className={`${commonClasses} ${sizeClass}`} href={`${url}`}>
            <FaPlay />
            <span>{text}</span>
        </Link>
    )
}