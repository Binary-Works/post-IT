import React, { useEffect, useState } from 'react';
import Hot from './hot';
import {BsFire} from 'react-icons/bs'

function Hots(){
  const fakeData = [
    {
      title:"dekhun ki korlo",
      img:"https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg"
    },
    {
      title:"dekhun ki korlo",
      img:"https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg"
    },
    {
      title:"e ki korlo meye ti",
      img:"https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg"
    },
    {
      title:"e ki korlo meye ti",
      img:"https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg"
    },
    {
      title:"ay korun 100000$",
      img:"https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg"
    },
    {
      title:"ay korun 100000$",
      img:"https://c4.wallpaperflare.com/wallpaper/838/806/561/satoru-gojo-one-piece-hd-wallpaper-preview.jpg"
    }
  ]
  return (
    <div className='shadow-md p-2 px-4 h-fit overflow-hidden bg-white_gray-100 dark:bg-black_gray-500'>
      <h1 className='text-2xl text-black_gray-900 dark:text-white_gray-500 font-semibold flex items-center gap-2'> <span className="relative flex h-2 w-2">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-400"></span>
</span> Hot now <span className='text-primary-500'><BsFire/></span></h1>
      <div className='overflow-hidden h-fit'>

      <div className='w-fit flex animate-[phslide_35s_linear_infinite] lg:animate-[slide_35s_linear_infinite] gap-12'>
        {fakeData.map((item,index)=><Hot key={index} item={item}/>)}
      </div>
      </div>
    </div>
  );
};

export default Hots;