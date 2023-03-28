import React from "react";
import { Category } from "../category/category";
import Posts from "../posts/posts";

const Feeds = () => {
  const fakeData = [
    {
      id: 1,
      title: "dekhun ki korlo",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      id: 2,
      title: "dekhun ki korlo",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      id: 3,
      title: "e ki korlo meye ti",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      id: 4,
      title: "e ki korlo meye ti",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      id: 5,
      title: "ay korun 100000$",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      id: 6,
      title: "ay korun 100000$",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      id: 7,
      title: "dekhun ki korlo",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      id: 8,
      title: "dekhun ki korlo",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      id: 9,
      title: "e ki korlo meye ti",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      id: 10,
      title: "e ki korlo meye ti",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      id: 11,
      title: "ay korun 100000$",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      id: 12,
      title: "ay korun 100000$",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      id: 13,
      title: "dekhun ki korlo",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      id: 14,
      title: "dekhun ki korlo",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      id: 15,
      title: "e ki korlo meye ti",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      id: 16,
      title: "e ki korlo meye ti",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      id: 17,
      title: "ay korun 100000$",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      id: 18,
      title: "ay korun 100000$",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
  ];
  return (
    <div className="flex justify-between dark:text-white_gray-100 gap-5">
      <div className="md:w-[63%] flex flex-col gap-6">
        {fakeData.map((item, index) => (
          <Posts key={index} item={item} />
        ))}
      </div>
      <div className="w-[33%] hidden md:block">
        <Category />
      </div>
    </div>
  );
};

export default Feeds;
