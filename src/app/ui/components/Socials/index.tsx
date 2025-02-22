import Link from "next/link";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function SocialsLinks() {
    return (
        <div className="mx-auto md:mx-0">
            <h6 className="text-sm leading-none mb-3 font-[700] text-center md:text-left">Follow Us</h6>
            <div className=" flex items-center gap-2">
                <Link target="_blank" href="https://www.instagram.com/tarikcekirge/"><FaInstagram className="text-[#F56040] text-2xl" /></Link>
                <Link href="#"><FaSquareFacebook className="text-[#1877F2] text-2xl" /></Link>
                <Link href="#"><FaXTwitter className="text-white text-2xl" /></Link>
                <Link href="#"><FaYoutube className="text-[#FF0000] text-3xl" /></Link>

            </div>
        </div>
    )
}