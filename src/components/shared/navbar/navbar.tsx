import { Logo } from "../logo/logo";
import { ProfileIcon } from "../profile_icon/profileIcon";
import { Search } from "../search/search";
import { DarkMode } from "./darkMode";
import { AiOutlinePlus } from "react-icons/ai";
import { IconContainer } from "../icon_container/iconContainer";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="shadow-md py-3 px-1 md:px-5 dark:bg-black_gray-500 bg-white z-50">
      <div className="grid grid-cols-2 md:grid-cols-3 items-center">
        {/* **************** logo starts **************** */}
        <div className="center_y gap-2">
          <Link href={"/"}>
            <Logo />
          </Link>
          {/* this search bar will be hidden  */}
          <div className="md:hidden">
            <Search />
          </div>
        </div>
        {/* **************** logo ends **************** */}
        <div className="hidden md:block">
          <Search />
        </div>
        {/* ***** Profile and other useful links starts ***** */}
        <div className="flex gap-4 items-center ml-auto">
          {/* **************** Important Link Starts **************** */}
          {/* this will be hidden in mobile version */}
          <div className="center_y gap-3">
            {/* --- create blog button --- */}
            <Link href={"create-blog"}>
              <IconContainer size="35px">
                <AiOutlinePlus size={20} />
              </IconContainer>
            </Link>
            {/* --- dark mode switcher --- */}
            <DarkMode />
          </div>
          {/* **************** Important Link Starts **************** */}

          <ProfileIcon />
        </div>
        {/* ***** Profile and other useful links ends ***** */}
      </div>
    </nav>
  );
}
