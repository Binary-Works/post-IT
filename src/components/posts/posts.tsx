import React from 'react';

interface Props {
  item: {
    title:string;
    img: string;
  };
}


const Posts: React.FC<Props> = ({item}) => {
  return (
    <div className='w-full bg-white_gray-100 dark:bg-black_gray-500 shadow-md '>
      {item.title}
    </div>
  );
};

export default Posts;