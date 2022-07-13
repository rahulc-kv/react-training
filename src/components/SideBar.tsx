import React from 'react';

import Buttons from './Buttons';
import { TaxCryp } from '../assets/icons';

const SideBar = () => {
  return (
    <div className="absolute px-1 pt-5 w-[320px] h-full bg-white shadow-md">
      <div className="flex flex-row gap-1 pl-14">
        <TaxCryp className="pt-4 pl-3 w-14 h-14"></TaxCryp>
        <div className="pt-5 text-2xl font-bold">TaxCryp</div>
      </div>
      <Buttons></Buttons>
    </div>
  );
};
export default SideBar;
