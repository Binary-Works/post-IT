import React from 'react';
import {TbArrowBigUp,TbArrowBigDown,TbSend} from 'react-icons/tb'

const Reactionsection = () => {
  return (
    <div className='sticky bottom-0 w-full bg-white_gray-100 dark:bg-black_gray-500 py-4 flex items-center justify-between  text-2xl'>
      <form className='w-[75%] flex items-center'>
        <input className='bg-white_gray-500 dark:bg-black_gray-400 dark:placeholder:text-white_gray-100 w-full text-lg p-1' type="text" placeholder='Your comment' />
        <button className='pl-2'><TbSend/></button>
      </form>
      <div className='flex gap-2 items-center'>
        <button>
        <TbArrowBigUp/>
        </button>
        <button>
        <TbArrowBigDown/>
        </button>
      </div>
    </div>
  );
};

export default Reactionsection;