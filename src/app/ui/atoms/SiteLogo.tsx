import Image from "next/image";
import Link from "next/link";
import logo from "@/app/ui/images/witflix.svg"
import type { Logo } from "@/types";


export default function SiteLogo({ url, size }: Logo) {
    return (
        <Link href={url} className="min-w-[70px] max-w-[70px] md:max-w-fit">
            <Image alt="witflix" src={logo} width={size} />
        </Link>
    );
}