import React from "react";
import Head from "next/head";
import CreateBlog from "@/components/_page_/create_blog_page/createBlog";
import GlobalLayout from "@/layout/globalLayout";

const CreatePostPage = () => {
  return (
    <>
      <Head>
        <title>Post-IT | Create Post</title>
      </Head>
      <GlobalLayout>
        <CreateBlog />
      </GlobalLayout>
    </>
  );
};

export default CreatePostPage;
