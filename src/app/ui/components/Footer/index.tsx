import Link from "next/link";
import SocialsLinks from "../Socials";
import AppLinks from "../AppLinks";
import tarik from "@/app/ui/images/tarikcekirge.svg"
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="pt-4 pb-8">
            <div className="container flex justify-between items-start gap-4 md:gap-8 flex-wrap">
                <div className="flex-1 min-w-full md:min-w-min">
                    <div className="flex items-start gap-3 text-sm font-[700] child-hover:text-wit-700 child:transition-colors child:leading-none mb-3">
                        <Link className="footer-link" href="#">Terms of Use</Link>
                        <Link className="footer-link" href="#">Privacy Policy</Link>
                        <Link className="footer-link" href="#">FAQ</Link>
                        <Link className="footer-link" href="#">Watch List</Link>
                    </div>
                    <p className="text-sm text-[#b1b1b1]"><b>Lorem ipsum</b> dolor sit amet, consectetur adipisicing elit. Sapiente iste minus nisi adipisci aspernatur accusantium distinctio quidem doloribus explicabo, in, commodi sint voluptas, hic magnam ullam expedita fugit maxime ipsa?</p>
                </div>
                <SocialsLinks />
                <AppLinks />
            </div>
            <div className="flex justify-center mt-4">
                <Link href="https://www.linkedin.com/in/tarikcekirge/" target="_blank">
                    <span className="text-xs mb-1 text-[#ededed]">Designed and developed by: </span>
                    <Image src={tarik} width={148} alt="Developed by Tarık Çekirge" />
                </Link>

            </div>

        </footer>
    )
}