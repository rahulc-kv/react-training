import React from 'react';
import { MoreIcon, RefreshIcon } from '@assets/icons';
const ListElements = props => {
  const handleClick = () => {
    // console.log(props);
  };
  const handleMore = () => {
    //  console.log('More icon clicked');
  };
  const { data } = props;
  const { Img } = data;

  return (
    <div className="flex p-4 pl-2 m-2  h-16 bg-white rounded-md ">
      <div className=" flex flex-initial pl-8 w-96 ">
        <Img className="w-[75.85px] h-[26px]" />
        <h6 className="pt-1 pl-6 text-sm text-gray-700">
          | &emsp; {data.fileName}&ensp;{data.lastSync}
        </h6>
      </div>
      {data.isActive && (
        <div className="flex-initial  p-1 w-32 text-gray-700 ">
          <RefreshIcon
            onClick={handleClick}
            className="  w-4 h-4"></RefreshIcon>
        </div>
      )}

      <div className="flex-initial p-1 w-32 text-gray-700">
        <MoreIcon onClick={handleMore} className=" w-4 h-4" />
      </div>
    </div>
  );
};
export default ListElements;
