import React, { useEffect, useState } from 'react';

import { Employee } from '../containers/home/constants';

const Loading = () => {
  const [loading, setLoading] = useState(true);

  const handleReset = () => {
    setLoading(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });

  if (!loading) {
    return (
      <div className="pt-[50px] pl-[900px]">
        {Employee.map(employee => {
          return (
            <div
              key={employee.id}
              className="flex flex-row gap-5 pt-10 pl-[100px]">
              <div>{employee.name}</div>
              <div>{employee.age}</div>
            </div>
          );
        })}

        <button
          onClick={handleReset}
          className="m-10 w-20 h-12 font-bold text-slate-400
                hover:text-blue-900 bg-slate-50 hover:bg-gray-100 rounded-l shadow-md">
          Reset
        </button>
      </div>
    );
  }

  return <div className="pt-[150px] pl-[1000px]">Loading...</div>;
};

export default Loading;
