import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const [count, setCount] = useState(5);
  const [variable, setVariable] = useState(0);
  const interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      setCount(pcount => pcount - 1);
    }, 1000);
    return () => clearInterval(interval.current);
  }, [variable]);

  useEffect(() => {
    if (count <= 0) clearInterval(interval.current);
  }, [count]);

  const handleRestart = () => {
    setVariable(variable + 1);
    setCount(5);
  };

  return (
    <div className="h-44 text-center bg-white">
      <button
        className="p-[9px] m-4 w-[200px] h-10 
         text-sm leading-5 text-white bg-slateBlue rounded-md"
        onClick={handleRestart}>
        Restart
      </button>
      <h2 className="text-slateBlue">{count}</h2>
    </div>
  );
};

export default Timer;
