import React from 'react';

import { TaxCryp } from '../assets/icons';
import Buttons from './Buttons';

const SideBar = props => {
  const { idInFocus, setIdInFocus } = props;

  return (
    <div>
      <div className="absolute px-1 pt-5 w-[320px] h-full bg-white shadow-md">
        <div className="flex flex-row gap-1 pl-14">
          <TaxCryp className="pt-4 pl-3 w-14 h-14" />
          <div className="pt-5 text-2xl font-bold">TaxCryp</div>
        </div>
        <Buttons idInFocus={idInFocus} setIdInFocus={setIdInFocus} />
      </div>
    </div>
  );
};
export default SideBar;
