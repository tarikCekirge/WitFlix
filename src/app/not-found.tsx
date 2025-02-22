import notFound from "@/app/ui/images/404.svg"
import Image from "next/image"
export default function NotFound() {
    return (
        <div className="not-found">
            <Image alt="not found" src={notFound} width={400}
                height={400}
                sizes="300px"
                className="w-[150px] lg:w-[200px]" />
            <p className="mx-auto flex justify-center opacity-60 text-xl lg:text-2xl">Not Found</p>
        </div>
    )
}