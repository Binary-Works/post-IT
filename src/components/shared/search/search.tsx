import { BsSearch } from "react-icons/bs";

export function Search() {
  return (
    <div className="center_y w-10 h-10 md:w-full md:h-fit gap-4 bg-white_gray-400 dark:bg-black_gray-400 flex justify-center items-center p-0 md:py-2 md:px-5 rounded-full">
      <label htmlFor="search">
        <BsSearch className="text-gray-600 dark:text-white" />
      </label>
      <input
        className="w-full hidden md:block outline-none bg-transparent placeholder:text-gray-600 dark:placeholder:text-white "
        type="text"
        id="search"
        placeholder="Search Here..."
      />
    </div>
  );
}
