import React from 'react';
import { useNavigate } from 'react-router-dom';

const Buttons = () => {
  const navigate = useNavigate();

  const handleClickFiles = () => {
    navigate('/files-list');
  };

  const handleClickSource = () => {
    navigate('/source-list');
  };

  return (
    <div className="flex flex-col gap-4 p-5">
      <button
        onClick={handleClickSource}
        className="p-2 font-bold text-white bg-blue-500 hover:bg-blue-700 rounded-lg ">
        Source List
      </button>

      <button
        onClick={handleClickFiles}
        className="p-2 font-bold text-white bg-blue-500 hover:bg-blue-700 rounded-lg">
        Files List
      </button>
    </div>
  );
};

export default Buttons;
