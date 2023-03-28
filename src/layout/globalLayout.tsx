import { Navbar } from "@/components/shared/navbar/navbar";
import { type } from "os";
import React from "react";

type globalLayoutProps = {
  children: React.ReactNode;
};

const GlobalLayout = ({ children }: globalLayoutProps) => {
  return (
    <main className="h-screen grid grid-rows-[auto_1fr] w-screen bg-white_gray-500 dark:bg-black-400 relative">
      <Navbar />
      <div className="mt-6 px-5 lg:px-[25%] overflow-y-auto">{children}</div>
    </main>
  );
};

export default GlobalLayout;
