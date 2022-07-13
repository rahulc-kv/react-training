import React from 'react';

import { Binance, Celsius, CoinBase, Gemini } from '../assets/icons';

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
      img: CoinBase,
      Linked: false,
      isActive: true
    },
    {
      id: 4,
      img: CoinBase,
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
      Linked: true,
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
              className=" flex flex-col flex-nowrap items-center  w-64 h-24 bg-white rounded-xl">
              <Img className="  w-32 h-24" />

              <div>
                <div
                  className={`w-60  text-xs text-center text-emerald-500 no-underline 
                    hover:underline bg-slate-100 rounded-b-md ${
                      file.Linked ? 'visible' : 'invisible'
                    }`}>
                  Linked via api
                </div>
              </div>

              {!file.isActive && (
                <div
                  className=" w-60 text-xs text-center text-sky-700 no-underline 
                  hover:underline bg-slate-100  rounded-b-md">
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
