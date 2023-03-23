import { Logo } from "../logo/logo";
import { ProfileIcon } from "../profile_icon/profileIcon";
import { Search } from "../search/search";

export function Navbar() {
  return (
    <nav className="shadow-md p-2">
      <div className="grid grid-cols-3 items-center">
        <Logo />
        <Search />
        <ProfileIcon />
      </div>
    </nav>
  );
}
