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

  const handleColorChange = () => {
    return <div></div>;
  };

  return (
    <div className="flex flex-col gap-2 pt-6">
      <button
        onClick={handleClickSource}
        className="h-12 font-bold text-slate-400 
                hover:text-blue-900 bg-slate-50 hover:bg-gray-100 rounded-l shadow-md">
        Source List
      </button>

      <button
        onClick={handleClickFiles}
        className="h-12 font-bold text-gray-400 hover:text-blue-900 
                bg-slate-50 hover:bg-gray-100 rounded-l shadow-md">
        Files List
      </button>

      <button
        onClick={handleColorChange}
        className="h-12 font-bold text-gray-400 hover:text-blue-900 
                bg-slate-50 hover:bg-gray-100 rounded-l shadow-md">
        Blue
      </button>

      <button
        onClick={handleColorChange}
        className="h-12 font-bold text-gray-400 hover:text-blue-900 
                bg-slate-50 hover:bg-gray-100 rounded-l shadow-md">
        Indigo
      </button>
    </div>
  );
};

export default Buttons;
