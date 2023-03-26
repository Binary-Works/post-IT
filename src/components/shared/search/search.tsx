import { BsSearch } from "react-icons/bs";

export function Search() {
  return (
    <div
      className="center_y w-full gap-4 bg-white_gray-400 dark:bg-black_gray-400 
      py-2 px-5 rounded-full"
    >
      <label htmlFor="search">
        <BsSearch className="text-gray-600 dark:text-white" />
      </label>
      <input
        className="w-full outline-none bg-transparent placeholder:text-gray-600 dark:placeholder:text-white "
        type="text"
        id="search"
        placeholder="Search Here..."
      />
    </div>
  );
}
