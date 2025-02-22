import SiteLogo from "@/app/ui/atoms/SiteLogo";
export default function Loading() {


    return <div className="absolute  top-0 left-0 w-full h-screen flex items-center justify-center">
        <SiteLogo url="/" size={220} />
    </div>
}