import React from 'react';

import { CoinBase, Celsius, Gemini, Binance, Sync, Plus } from '@assets/icons';
import ListElements from '@components/ListElements';
import SearchElement from '@components/SearchElement';
import BoxElement from '@components/BoxElement';

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

  const handleClick = id => {
    // eslint-disable-next-line no-console
    console.log('Sync button number ' + id + ' is clicked');
  };

  const handleMore = id => {
    // eslint-disable-next-line no-console
    console.log('More icon number ' + id + ' is clicked');
  };

  return (
    <div className="w-full">
      <div className="h-44 bg-white">
        <div className="flex p-2 border-b-2">
          <h2 className="flex-initial p-3 mt-3 ml-4 w-96 font-sans text-2xl font-semibold">
            My Sources
          </h2>
          <button
            className="flex flex-initial p-[9px] m-4 mr-1 w-48 h-[40px] text-sm leading-5
         text-white bg-slateBlue rounded-md">
            <Sync className="flex-initial pr-[3px] mt-[1.5px] mr-[2px]" />
            Sync Transaction
          </button>
          <button
            className="flex flex-initial p-[9px] m-4 w-[200px] h-[40px] 
        text-sm leading-5 text-white bg-azul rounded-md">
            <Plus className="flex-initial pr-[3px] mt-[1px] mr-[2px]" />
            Import Transaction
          </button>
        </div>
        <div className="flex p-2 my-2">
          <SearchElement></SearchElement>
          <div className="flex ml-8 border-l-2">
            <BoxElement text="Exchanges"></BoxElement>
            <BoxElement text="Wallets"></BoxElement>
            <BoxElement text="CSV"></BoxElement>
          </div>
        </div>
      </div>
      <div className="flex p-4 h-16">
        <div className="flex-initial p-2 pl-6 w-96 font-semibold text-gunSmoke">
          Source
        </div>
        <div className="flex-initial p-2 pl-0 w-32 font-semibold text-gunSmoke">
          Sync
        </div>
        <div className="flex-initial p-2 pl-0 w-32 font-semibold text-gunSmoke">
          More
        </div>
      </div>
      {lists.map(list => {
        return (
          <div key={list.id}>
            <ListElements
              data={list}
              handleSync={handleClick}
              handleMore={handleMore}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SourceList;
