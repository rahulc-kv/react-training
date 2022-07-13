import React from 'react';

import { MoreIcon, RefreshIcon } from '@assets/icons';

const ListElements = props => {
  const { data, handleSync, handleMore } = props;
  const { Img } = data;

  return (
    <div className="flex p-4 pl-2 m-2  h-16 bg-white rounded-md ">
      <div className=" flex flex-initial pl-8 w-96 ">
        <Img className="w-[75.85px] h-[26px]" />
        <h6 className="pt-1 pl-6 text-sm text-gray-700">
          | &emsp; File Name: {data.fileName}&ensp;Last Sync: {data.lastSync}
        </h6>
      </div>

      <div className="flex-initial  p-1 pl-4 w-32 text-gray-700 ">
        <RefreshIcon
          onClick={() => handleSync(data.id)}
          className={`w-4 h-4 cursor-pointer ${
            data.isActive ? 'visible' : 'invisible'
          }`}
        />
      </div>

      <div className="flex-initial p-1 pl-4 w-32 text-gray-700">
        <MoreIcon
          onClick={() => handleMore(data.id)}
          className=" w-4 h-4 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ListElements;
