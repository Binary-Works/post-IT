import React from "react";
import { Category } from "../category/category";
import Posts from "../posts/posts";

const Feeds = () => {
  const fakeData = [
    {
      title: "dekhun ki korlo",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      title: "dekhun ki korlo",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      title: "e ki korlo meye ti",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      title: "e ki korlo meye ti",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      title: "ay korun 100000$",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      title: "ay korun 100000$",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      title: "dekhun ki korlo",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      title: "dekhun ki korlo",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      title: "e ki korlo meye ti",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      title: "e ki korlo meye ti",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      title: "ay korun 100000$",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      title: "ay korun 100000$",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      title: "dekhun ki korlo",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      title: "dekhun ki korlo",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      title: "e ki korlo meye ti",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      title: "e ki korlo meye ti",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      title: "ay korun 100000$",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
    {
      title: "ay korun 100000$",
      img: "https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg",
    },
  ];
  return (
    <div className="flex justify-between dark:text-white_gray-100 gap-5">
      <div className="w-[63%] flex flex-col gap-6">
        {fakeData.map((item, index) => (
          <Posts key={index} item={item} />
        ))}
      </div>
      <div className="w-[33%] relative">
        <Category />
      </div>
    </div>
  );
};

export default Feeds;
