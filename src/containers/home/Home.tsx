import React from 'react';

import { useLazyGetCountryByTypeQuery } from '@services/countryApi';

const HomePage = () => {
  const [getCountry, { data, error, isLoading }] =
    useLazyGetCountryByTypeQuery();

  const handleButtonCLick = () => {
    getCountry('v3.1');
  };
  if (isLoading) {
    return (
      <div className="pt-96 w-full">
        <p className="p-16  text-lg font-bold text-center  text-slateBlue  align-middle ">
          Loading...
        </p>
      </div>
    );
  }
  if (error) {
    return <div>error</div>;
  }

  return (
    <div className="w-full">
      <button
        className="p-[9px] m-4 ml-8 w-52 h-10 
        text-sm leading-5 text-white bg-azul rounded-md"
        onClick={handleButtonCLick}>
        Click
      </button>
      <div className="flex p-4 w-full h-16 ">
        <div className="flex-initial p-2 pl-3 w-1/4 font-semibold text-gunSmoke">
          Country
        </div>
        <div className="flex-initial p-2 pl-2 w-1/4 font-semibold text-gunSmoke">
          Capital
        </div>
        <div className="flex-initial p-2 pl-0 w-1/4 font-semibold text-gunSmoke">
          Flag
        </div>
        <div className="flex-initial p-2 pl-0 w-1/4 font-semibold text-gunSmoke">
          Continent
        </div>
      </div>
      {data &&
        data.map(info => {
          return (
            <div
              key={info.altSpellings[0]}
              className="flex p-4 m-2 h-16 bg-white">
              <p className="flex-initial p-2 w-1/4">{info.altSpellings[1]}</p>
              <p className="flex-initial p-2 w-1/4 ">{info.capital}</p>
              <div className="flex-initial p-2 w-1/4">
                <img
                  className="w-6 h-5"
                  src={info.flags.svg}
                  alt="image not found"
                />
              </div>
              <p className="flex-initial p-2 w-1/4 ">{info.continents}</p>
            </div>
          );
        })}
      ;
    </div>
  );
};

export default HomePage;
