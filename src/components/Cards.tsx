import React from 'react';

import { Binance } from '/home/cizil/Practise/cards/react-training/src/assets/index';
import { Celsius } from '/home/cizil/Practise/cards/react-training/src/assets/index';
import { Coinbase } from '/home/cizil/Practise/cards/react-training/src/assets/index';
import { Gemini } from '/home/cizil/Practise/cards/react-training/src/assets/index';

const Cards = () => {
  const files = [
    {
      id: 1,
      img: Binance,
      Linked: true,
      isActive: true
    },
    {
      id: 2,
      img: Binance,
      Linked: false,
      isActive: true
    },
    {
      id: 3,
      img: Coinbase,
      Linked: false,
      isActive: true
    },
    {
      id: 4,
      img: Coinbase,
      Linked: false,
      isActive: true
    },
    {
      id: 5,
      img: Celsius,
      Linked: true,
      isActive: true
    },
    {
      id: 6,
      img: Celsius,
      Linked: false,
      isActive: true
    },
    {
      id: 7,
      img: Gemini,
      Linked: false,
      isActive: true
    },
    {
      id: 8,
      img: Gemini,
      Linked: false,
      isActive: true
    },
    {
      id: 9,
      img: Binance,
      Linked: false,
      isActive: true
    },
    {
      id: 10,
      img: Binance,
      Linked: false,
      isActive: false
    }
  ];

  return (
    <div>
      <div className=" flex flex-wrap gap-5 pt-10 pl-10 ">
        {files.map(file => {
          const Img = file.img;

          return (
            <div
              key={file.id}
              className=" flex flex-col justify-center items-center w-64  bg-white rounded-xl">
              <Img className="w-32 h-16" />
              {file.Linked && (
                <div>
                  <div
                    className="w-56 text-xs text-center text-emerald-500 no-underline 
                    hover:underline bg-slate-100 rounded-xl">
                    Linked via api
                  </div>
                </div>
              )}
              {!file.isActive && (
                <div
                  className="w-56 text-xs text-center text-sky-700 no-underline 
                  hover:underline bg-slate-100 rounded-xl">
                  Coming soon
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Cards;
