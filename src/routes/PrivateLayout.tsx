import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import HomePage from '@pages/HomePage';
import RoutesPath from './RoutesPath';
import FilesListingPage from '@pages/FilesPage';

const PrivateLayout = () => {
  return (
    <div className={'flex flex-col w-full sm:flex-row'}>
      <div
        className={`relative
         transition-all duration-[725ms] ease-out`}>
        <Suspense fallback="Loading">
          <Routes>
            <Route path={RoutesPath.HOME} element={<HomePage />} />
            <Route path={RoutesPath.FILES} element={<FilesListingPage />} />
            <Route
              path={RoutesPath.ALL}
              element={<Navigate replace={true} to={RoutesPath.HOME} />}
            />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default PrivateLayout;
