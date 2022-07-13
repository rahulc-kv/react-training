import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import HomePage from '@pages/HomePage';
import RoutesPath from './RoutesPath';
import FilesListingPage from '@pages/FilesPage';
import SourcePage from '@pages/SourcePage';

const PrivateLayout = () => (
  <div className={'flex flex-col w-full sm:flex-row'}>
    <Suspense fallback="Loading">
      <Routes>
        <Route path={RoutesPath.HOME} element={<HomePage />} />
        <Route path={RoutesPath.FILES} element={<FilesListingPage />} />
        <Route path={RoutesPath.SOURCES} element={<SourcePage />} />
        <Route
          path={RoutesPath.ALL}
          element={<Navigate replace={true} to={RoutesPath.HOME} />}
        />
      </Routes>
    </Suspense>
  </div>
);

export default PrivateLayout;
