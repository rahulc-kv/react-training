import React from 'react';
//import { DotIcon, MoreIcon, RefreshIcon } from '@assets/icons';
import { CoinBase, Celsius } from '@assets/icons';
import ListElements from './ListElements';
const Lists = () => {
  const lists = [
    {
      id: 1,
      Img: CoinBase,
      fileName: 'f1.txt',
      lastSync: '12.06.2021, 11.00 am'
    },
    {
      id: 2,
      Img: Celsius,
      fileName: 'f2.txt',
      lastSync: '12.06.2021, 11.00 am'
    },
    {
      id: 3,
      Img: CoinBase,
      fileName: 'f1.txt',
      lastSync: '12.06.2021, 11.00 am'
    }
  ];
  return (
    <div>
      <div className="flex p-6 w-full h-16">
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
      ;
    </div>
  );
};
export default Lists;
