import { Logo } from "../logo/logo";
import { ProfileIcon } from "../profile_icon/profileIcon";
import { Search } from "../search/search";
import { DarkMode } from "./darkMode";

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-screen shadow-md p-2 dark:bg-black_gray-500 bg-white z-50">
      <div className="grid grid-cols-3 items-center">
        <Logo />
        <Search />
        <div className="flex gap-5 items-center ml-auto">
          {/* dark mode switcher */}
          <DarkMode />
          <ProfileIcon />
        </div>
      </div>
    </nav>
  );
}
