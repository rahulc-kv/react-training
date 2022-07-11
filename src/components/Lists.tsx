import React from 'react';
//import { DotIcon, MoreIcon, RefreshIcon } from '@assets/icons';
//import { CoinBase,Celsius } from '@assets/icons';
import ListElements from './ListElements';
const Lists = () => {
  //  const a=[{
  //      id:1,
  //      img:<CoinBase>,
  //      txt:'|        Last Sync: Filename, 12.06.2021, 11.00 am',},
  //      { id:2, img:Celsius,
  //      txt:'|        Last Sync: Filename, 12.06.2021, 11.00 am'}];
  return (
    <div>
      <div className="flex p-6 w-screen h-16">
        <div className="flex-initial p-2 pl-6 w-96 text-gray-700">Source</div>
        <div className="flex-initial p-2 w-32 text-gray-700 ">Sync</div>
        <div className="flex-initial p-2 w-32 text-gray-700">More</div>
      </div>
      {/* { a.map((list) => (
             <div key={list.id}>
             <ListElements  prop={list}/>
      )) }; */}

      <ListElements />
      <ListElements />
      <ListElements />
    </div>
    //<h1 className="p-8 text-3xl text-gray-700 font-bold mb-5">Lists</h1>
  );
};
export default Lists;
