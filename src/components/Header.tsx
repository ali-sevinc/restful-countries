import Link from "next/link";
import Theme from "./Theme";
import { HiOutlineHome } from "react-icons/hi";

export default function Header() {
  return (
    <header className="w-full bg-white dark:bg-stone-700 px-4 h-20 shadow-md flex items-center justify-between ">
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl">
          <span className="hidden md:inline-flex">Countries of the World</span>
          <span className="md:hidden">
            <HiOutlineHome />
          </span>
        </Link>
        <Theme />
      </div>
    </header>
  );
}
