import { Logo } from "../logo/logo";
import { ProfileIcon } from "../profile_icon/profileIcon";
import { Search } from "../search/search";

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-screen shadow-md p-2 dark:bg-black_gray-500 z-50">
      <div className="grid grid-cols-3 items-center">
        <Logo />
        <Search />
        <ProfileIcon />
      </div>
    </nav>
  );
}
