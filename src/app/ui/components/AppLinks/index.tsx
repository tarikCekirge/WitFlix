import appleStore from "@/app/ui/images/apple-store.png"
import playStore from "@/app/ui/images/play-store.png"
import Image from "next/image"
import Link from "next/link"

export default function AppLinks() {
    return (
        <div className="mx-auto md:mx-0">
            <h6 className="text-sm leading-none mb-3 font-[700] text-center md:text-left">Apps</h6>
            <div className="flex gap-2">
                <Link href="#"><Image width={100} className="min-w-[100px]" loading="lazy" src={appleStore} alt="Apple Store" /></Link>
                <Link href="#"><Image width={100} className="min-w-[100px]" loading="lazy" src={playStore} alt="Play Store" /></Link>
            </div>
        </div>

    )

}