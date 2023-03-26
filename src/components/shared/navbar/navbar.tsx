import { Logo } from "../logo/logo";
import { ProfileIcon } from "../profile_icon/profileIcon";
import { Search } from "../search/search";
import { DarkMode } from "./darkMode";
import { AiOutlinePlus } from "react-icons/ai";
import { IconContainer } from "../icon_container/iconContainer";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky top-0 w-full shadow-md py-3 px-5 dark:bg-black_gray-500 bg-white z-50">
      <div className="grid grid-cols-3 items-center">
        {/* clicking on logo take user to the homepage */}
        <Link href={"/"}>
          <Logo />
        </Link>
        {/* search icon */}
        <Search />
        <div className="flex gap-5 items-center ml-auto">
          {/* create blog button */}
          <Link href={"create-blog"}>
            <IconContainer>
              <AiOutlinePlus />
            </IconContainer>
          </Link>
          {/* dark mode switcher */}
          <DarkMode />
          <ProfileIcon />
        </div>
      </div>
    </nav>
  );
}
