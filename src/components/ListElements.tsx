import React from 'react';
import { MoreIcon, RefreshIcon, CoinBase } from '@assets/icons';
const ListElements = () => {
  const handleClick = () => {
    //  console.log('Refresh icon clicked');
  };
  const handleMore = () => {
    //  console.log('More icon clicked');
  };
  return (
    <div className="flex p-4 pl-2 m-2 w-screen h-16 bg-white rounded-md ">
      <div className=" flex flex-initial pl-10 w-96 ">
        <CoinBase className="w-[75.85px] h-[26px]"></CoinBase>

        <h6 className="pt-1 pl-6 text-gray-700">
          | Last Sync: Filename, 12.06.2021, 11.00 am
        </h6>
      </div>
      <div className="flex-initial  p-1 w-32 text-gray-700 ">
        <RefreshIcon onClick={handleClick} className="  w-4 h-4"></RefreshIcon>
      </div>
      <div className="flex-initial p-1 w-32 text-gray-700">
        <MoreIcon onClick={handleMore} className=" w-4 h-4" />
      </div>
    </div>
  );
};
export default ListElements;
