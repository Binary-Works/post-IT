import React from 'react';

interface Props {
  item: {
    title:string;
    img: string;
  };
}

const Hot: React.FC<Props> = ({item}) => {
  return (
    <div className='w-80 h-44 my-2 overflow-hidden border-[10px] hover:border-[5px] transition-all border-white_gray-500 dark:border-black_gray-400 shadow-md relative cursor-pointer'>
      <img className='absolute top-0 left-0 w-full' src={item.img} alt="" />
      <h1 className='absolute w-full h-[50%] text-lg text-white_gray-100 flex items-center justify-center bottom-0 bg-gradient-to-t from-[#484849] to-[#1a1a1b00]'>{item.title}</h1>
    </div>
  );
};

export default Hot;