import React, { useState } from 'react';

function Increment() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(prevState => prevState + 1);
  };

  return (
    <div>
      <div>
        <button
          onClick={increment}
          className="absolute  right-12 bottom-12 w-60 
                h-12 font-bold text-slate-400 hover:text-blue-900 bg-slate-50 
                hover:bg-gray-200 rounded-xl shadow-md">
          Count : {counter}
        </button>
      </div>
    </div>
  );
}

export default Increment;
