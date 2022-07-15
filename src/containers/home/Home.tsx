import React, { useState } from 'react';

import SideBar from '@components/SideBar';
import { HomePageBgColorMapper } from './constants';
import Increment from '@components/Increment';
import Loading from '@components/Loading';

const HomePage = () => {
  const [idInFocus, setIdInFocus] = useState('');

  return (
    <div>
      <SideBar idInFocus={idInFocus} setIdInFocus={setIdInFocus} />
      <div
        className={`w-[1850px] h-[970px] ${HomePageBgColorMapper[idInFocus]}`}>
        <div>
          <Increment />
          <Loading></Loading>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
