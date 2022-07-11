import React from 'react';
import Cards from '@components/Cards';

const HomePage = () => {
  return (
    <div>
      <p className="text-blue-600 underline underline-offset-1 pl-10 pt-5">
        Upload a generic File
      </p>
      <Cards></Cards>
    </div>
  );
};

export default HomePage;
