import React from 'react';

interface Props {
  item: {
    title:string;
    img: string;
  };
}


const Posts: React.FC<Props> = ({item}) => {
  return (
    <div className='w-full bg-white_gray-100 dark:bg-black_gray-500 shadow-md py-2 px-4 flex   items-center gap-5'>
      <div className='relative'>
      <img className='' src={item.img} alt="" />
      {/* <div className='absolute w-full h-[60%] text-lg text-white_gray-100 flex flex-col-reverse bottom-0 bg-gradient-to-t from-[#1a1a1b] to-[#1a1a1b00]'></div> */}
      </div>
      <div className='flex flex-col gap-2'>
        <h1 className='text-2xl font-bold'>{item.title}</h1>
        <h1 className='font-semibold'>@execute-soft</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, in. Quam, a voluptatem! Magnam Lorem ipsum dolor sit amet,  </p>
      </div>
    </div>
  );
};

export default Posts;