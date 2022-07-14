import React, { useState } from 'react';

import SideBar from '@components/SideBar';
import { HomePageBgColorMapper } from './constants';

const HomePage = () => {
  const [idInFocus, setIdInFocus] = useState('');

  return (
    <div>
      <SideBar idInFocus={idInFocus} setIdInFocus={setIdInFocus} />
      <div
        className={`w-[1850px] h-[970px] ${HomePageBgColorMapper[idInFocus]}`}
      />
    </div>
  );
};

export default HomePage;
