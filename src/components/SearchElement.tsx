import React from 'react';

import { Search } from '@assets/icons';

const SearchElement = () => {
  return (
    <div className="flex flex-initial p-2 pl-1 ml-6 w-[320px] h-[44px] bg-whiteSmoke rounded-md ">
      <Search className="flex-initial mt-[9px] ml-2  w-[14.25px] h-[14.25px]" />
      <input
        placeholder="Search"
        className="flex-initial mb-[3px] ml-2 w-48 h-[30px] text-sm
        leading-5 text-gray-500 bg-whiteSmoke border border-gray-100 focus:outline-none"
      />
    </div>
  );
};

export default SearchElement;
