import React from 'react';
import Feeds from '../feeds/feeds';
import Hots from '../hots/hots';

const Homepage = () => {
  return (
    <div className='px-4 lg:px-[25%] pt-5 flex flex-col gap-12 bg-white_gray-500 dark:bg-black-400'>
      <Hots/>
      <Feeds/>
    </div>
  );
};

export default Homepage;