import { categoryContainerProps } from "@/utils/types/types";
import { BsThreeDots } from "react-icons/bs";

export const CategoryContainer = ({ upvote, tag }: categoryContainerProps) => {
  return (
    <div className="flex justify-between cursor-pointer hover:bg-white_gray-400 dark:hover:bg-black_gray-600 py-2 px-4">
      <div>
        <h3 className="mb-1 font-semibold">#{tag}</h3>
        <p className="text-sm text-gray-400">{upvote} Upvotes</p>
      </div>
      <div>
        <BsThreeDots />
      </div>
    </div>
  );
};
