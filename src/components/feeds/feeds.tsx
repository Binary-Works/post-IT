import React from 'react';
import Posts from '../posts/posts';

const Feeds = () => {
  const fakeData = [
    {
      title:"dekhun ki korlo",
      img:"https://static-cf.akamaized.net/images/01dzkj16vbhwgzey0wk0hps64n/capture-jpg.jpg?impolicy=All_policy&im=Resize=(690)"
    },
    {
      title:"dekhun ki korlo",
      img:"https://static-cf.akamaized.net/images/01dzkj16vbhwgzey0wk0hps64n/capture-jpg.jpg?impolicy=All_policy&im=Resize=(690)"
    },
    {
      title:"e ki korlo meye ti",
      img:"https://static-cf.akamaized.net/images/01dzkj16vbhwgzey0wk0hps64n/capture-jpg.jpg?impolicy=All_policy&im=Resize=(690)"
    },
    {
      title:"e ki korlo meye ti",
      img:"https://static-cf.akamaized.net/images/01dzkj16vbhwgzey0wk0hps64n/capture-jpg.jpg?impolicy=All_policy&im=Resize=(690)"
    },
    {
      title:"ay korun 100000$",
      img:"https://static-cf.akamaized.net/images/01dzkj16vbhwgzey0wk0hps64n/capture-jpg.jpg?impolicy=All_policy&im=Resize=(690)"
    },
    {
      title:"ay korun 100000$",
      img:"https://static-cf.akamaized.net/images/01dzkj16vbhwgzey0wk0hps64n/capture-jpg.jpg?impolicy=All_policy&im=Resize=(690)"
    },
    {
      title:"dekhun ki korlo",
      img:"https://static-cf.akamaized.net/images/01dzkj16vbhwgzey0wk0hps64n/capture-jpg.jpg?impolicy=All_policy&im=Resize=(690)"
    },
    {
      title:"dekhun ki korlo",
      img:"https://static-cf.akamaized.net/images/01dzkj16vbhwgzey0wk0hps64n/capture-jpg.jpg?impolicy=All_policy&im=Resize=(690)"
    },
    {
      title:"e ki korlo meye ti",
      img:"https://static-cf.akamaized.net/images/01dzkj16vbhwgzey0wk0hps64n/capture-jpg.jpg?impolicy=All_policy&im=Resize=(690)"
    },
    {
      title:"e ki korlo meye ti",
      img:"https://static-cf.akamaized.net/images/01dzkj16vbhwgzey0wk0hps64n/capture-jpg.jpg?impolicy=All_policy&im=Resize=(690)"
    },
    {
      title:"ay korun 100000$",
      img:"https://static-cf.akamaized.net/images/01dzkj16vbhwgzey0wk0hps64n/capture-jpg.jpg?impolicy=All_policy&im=Resize=(690)"
    },
    {
      title:"ay korun 100000$",
      img:"https://static-cf.akamaized.net/images/01dzkj16vbhwgzey0wk0hps64n/capture-jpg.jpg?impolicy=All_policy&im=Resize=(690)"
    },
    {
      title:"dekhun ki korlo",
      img:"https://static-cf.akamaized.net/images/01dzkj16vbhwgzey0wk0hps64n/capture-jpg.jpg?impolicy=All_policy&im=Resize=(690)"
    },
    {
      title:"dekhun ki korlo",
      img:"https://static-cf.akamaized.net/images/01dzkj16vbhwgzey0wk0hps64n/capture-jpg.jpg?impolicy=All_policy&im=Resize=(690)"
    },
    {
      title:"e ki korlo meye ti",
      img:"https://static-cf.akamaized.net/images/01dzkj16vbhwgzey0wk0hps64n/capture-jpg.jpg?impolicy=All_policy&im=Resize=(690)"
    },
    {
      title:"e ki korlo meye ti",
      img:"https://static-cf.akamaized.net/images/01dzkj16vbhwgzey0wk0hps64n/capture-jpg.jpg?impolicy=All_policy&im=Resize=(690)"
    },
    {
      title:"ay korun 100000$",
      img:"https://static-cf.akamaized.net/images/01dzkj16vbhwgzey0wk0hps64n/capture-jpg.jpg?impolicy=All_policy&im=Resize=(690)"
    },
    {
      title:"ay korun 100000$",
      img:"https://static-cf.akamaized.net/images/01dzkj16vbhwgzey0wk0hps64n/capture-jpg.jpg?impolicy=All_policy&im=Resize=(690)"
    }
  ]
  return (
    <div className='flex dark:text-white_gray-100'>
      <div className='w-[65%] flex flex-col gap-6'>
        {
          fakeData.map(
            (item,index)=><Posts key={index} item={item}/>
          )
        }
      </div>
      <div className='w-[35%]'>
        category
      </div>
    </div>
  );
};

export default Feeds;