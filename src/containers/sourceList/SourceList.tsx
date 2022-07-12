import React from 'react';
import { CoinBase, Celsius, Gemini, Binance } from '@assets/icons';
import ListElements from '@components/ListElements';

const SourceList = () => {
  const lists = [
    {
      id: 1,
      Img: CoinBase,
      fileName: 'f1.txt',
      lastSync: '12.06.2021, 11.00 am',
      isActive: true
    },
    {
      id: 2,
      Img: Celsius,
      fileName: 'f2.txt',
      lastSync: '12.06.2021, 11.00 am',
      isActive: true
    },
    {
      id: 3,
      Img: CoinBase,
      fileName: 'f3.txt',
      lastSync: '12.06.2021, 11.00 am',
      isActive: true
    },
    {
      id: 4,
      Img: Gemini,
      fileName: 'f4.txt',
      lastSync: '12.06.2021, 11.00 am',
      isActive: true
    },
    {
      id: 5,
      Img: Gemini,
      fileName: 'f5.txt',
      lastSync: '12.06.2021, 11.00 am',
      isActive: false
    },
    {
      id: 6,
      Img: Gemini,
      fileName: 'f6.txt',
      lastSync: '12.06.2021, 11.00 am',
      isActive: false
    },
    {
      id: 7,
      Img: Celsius,
      fileName: 'f7.txt',
      lastSync: '12.06.2021, 11.00 am',
      isActive: false
    },
    {
      id: 8,
      Img: Binance,
      fileName: 'f8.txt',
      lastSync: '12.06.2021, 11.00 am',
      isActive: true
    }
  ];
  return (
    <div className="w-full">
      <div className="flex p-6 h-16">
        <div className="flex-initial p-2 pl-6 w-96 text-gray-700">Source</div>
        <div className="flex-initial p-2 w-32 text-gray-700 ">Sync</div>
        <div className="flex-initial p-2 w-32 text-gray-700">More</div>
      </div>
      {lists.map(list => {
        // const {Img} = list;
        return (
          <div key={list.id}>
            <ListElements data={list} />
          </div>
        );
      })}
    </div>
  );
};

export default SourceList;
