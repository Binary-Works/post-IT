import React, { useEffect, useState } from 'react';
import Hot from './hot';
import {BsFire} from 'react-icons/bs'

function Hots(){
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
    }
  ]
  return (
    <div className='mx-[25%] shadow-md p-2 px-4 h-fit mt-5 overflow-hidden'>
      <h1 className='text-2xl font-semibold flex items-center gap-2'>Hot now <span className='text-orange-500'><BsFire/></span></h1>
      <div className='overflow-hidden h-fit'>

      <div className='w-fit flex animate-[slide_35s_linear_infinite] gap-12'>
        {fakeData.map((item,index)=><Hot key={index} item={item}/>)}
      </div>
      </div>
    </div>
  );
};

export default Hots;