const CreateBlog = () => {
  return (
    <>
      <div className="mt-20 w-[700px] mx-auto">
        <h3
          className="text-xl font-semibold border-b-2 dark:text-white text-black_gray-400 
        border-white_gray-100 pb-2 px-2 mb-5 dark:border-gray-500"
        >
          Create a Blog
        </h3>
        <div>
          <p></p>
          <form className="flex flex-col gap-5 p-5 bg-white dark:bg-black_gray-500 shadow-md">
            <input
              className="w-full border border-gray-300 px-5 py-2 dark:bg-black-400 dark:border-gray-500"
              type="text"
              placeholder="Title"
            />
            <textarea
              className="border border-gray-300 px-5 py-2 dark:bg-black-400 dark:border-gray-500"
              placeholder="Write your blog...."
              rows={8}
              name=""
              id=""
            />
            <button className="button w-fit ml-auto bg-primary-500 text-white">Publish</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
