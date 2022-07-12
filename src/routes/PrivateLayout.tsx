import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import HomePage from '@pages/HomePage';
import RoutesPath from './RoutesPath';
import SourcePage from '@pages/SourcePage';

const PrivateLayout = () => {
  return (
    <div className={'flex flex-col w-full sm:flex-row'}>
      {/* <div
        className={`relative w-full
         transition-all duration-[725ms] ease-out`}> */}
      <Suspense fallback="Loading">
        <Routes>
          <Route path={RoutesPath.HOME} element={<HomePage />} />
          <Route path={RoutesPath.SOURCES} element={<SourcePage />} />
          <Route
            path={RoutesPath.ALL}
            element={<Navigate replace={true} to={RoutesPath.HOME} />}
          />
        </Routes>
      </Suspense>
      {/* </div> */}
    </div>
  );
};

export default PrivateLayout;
