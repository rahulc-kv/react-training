import React from 'react';

const BoxElement = props => {
  const { text } = props;

  return (
    <div
      className="flex flex-initial p-3 pl-1 ml-6 w-[100px]  h-[44px] 
        text-center bg-whiteSmoke rounded-3xl border-[1px]  border-gray-400 border-dashed">
      <p className="flex-initial  w-32 text-sm leading-5 text-gunSmoke">
        {text}
      </p>
    </div>
  );
};
export default BoxElement;
