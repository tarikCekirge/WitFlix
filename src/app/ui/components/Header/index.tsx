import Link from "next/link";
import SiteLogo from "../../atoms/SiteLogo";
import userImg from "@/app/ui/images/user-img.jpg"
import Search from "../../atoms/SearchInput";
import { FaBell } from "react-icons/fa";
import Image from 'next/image'



export default function Header() {
  return (
    <header>
      <div className="container">
        <nav className="flex items-center gap-4 justify-between py-6">
          <SiteLogo url="/" size={148} />
          <div className="space-x-4 text-[#eee] child-hover:text-wit-500 child:transition-colors">
            { }
            <Link href={{ pathname: '/movies' }}>Movies</Link>
            <Link href={{ pathname: '/tv' }}>Tv</Link>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:block"> <Search /></div>
            <FaBell className="size-5" />
            <Link href="https://www.linkedin.com/in/tarikcekirge/" target="_blank">
              <div className="size-7 overflow-hidden bg-slate-400 rounded-full">
                <Image className="w-full" alt="User" src={userImg} />
              </div>
            </Link>
          </div>
        </nav>
        <div className=" md:hidden order-last flex-1 md:flex-auto mb-4"><Search /></div>
      </div>
    </header>
  );
}
