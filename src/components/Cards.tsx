import React from 'react';

import { Binance } from '/home/cizil/Practise/cards/react-training/src/assets/index';
import { Celsius } from '/home/cizil/Practise/cards/react-training/src/assets/index';
import { Coinbase } from '/home/cizil/Practise/cards/react-training/src/assets/index';
import { Gemini } from '/home/cizil/Practise/cards/react-training/src/assets/index';

const Cards = () => {
  return (
    <div>
      <div className="grid grid-rows-2 grid-flow-col gap-5 pt-10 pl-10">
        {/* <div className="flex-initial w-48 h-16 bg-white rounded-xl"> */}
        <div className=" flex justify-center items-center w-56 bg-white rounded-xl">
          <Binance className="w-32 h-16"></Binance>
        </div>
        <div className="flex justify-center items-center w-56 bg-white rounded-xl">
          <Binance className=" w-32 h-16 "></Binance>
        </div>
        <div className="flex justify-center items-center w-56 bg-white rounded-xl ">
          <Coinbase className=" w-32 h-16 "></Coinbase>
        </div>
        <div className="flex justify-center items-center w-56 bg-white rounded-xl">
          <Coinbase className=" w-32 h-16 "></Coinbase>
        </div>
        <div className="flex justify-center items-center w-56 bg-white rounded-xl ">
          <Celsius className=" w-32 h-16 "></Celsius>
        </div>
        <div className="flex justify-center items-center w-56 bg-white rounded-xl">
          <Celsius className=" w-32 h-16 "></Celsius>
        </div>
        <div className="flex justify-center items-center w-56 bg-white rounded-xl ">
          <Gemini className=" w-32 h-16 "></Gemini>
        </div>
        <div className="flex justify-center items-center w-56 bg-white rounded-xl">
          <Gemini className="w-32 h-16 "></Gemini>
        </div>
        <div className="flex justify-center items-center  w-56 bg-white rounded-xl">
          <Binance className=" w-32 h-16 "></Binance>
        </div>
        <div className="flex justify-center items-center w-56 bg-white rounded-xl">
          <Binance className=" w-32 h-16 "></Binance>
        </div>
      </div>
    </div>
  );
};

export default Cards;
