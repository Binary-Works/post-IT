import { CategoryContainerData } from "@/data/categoryData";
import { CategoryContainer } from "./categoryContainer";

export const Category = () => {
  return (
    <section className="dark:bg-black_gray-500 bg-white sticky top-0 shadow-md w-full">
      <h2 className="text-2xl font-semibold mb-5 py-2 px-4">Category</h2>
      {CategoryContainerData.map((category) => (
        <CategoryContainer tag={category.tag} upvote={category.upvote} />
      ))}
      {/* <CategoryContainer /> */}
    </section>
  );
};
