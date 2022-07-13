import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Buttons = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/files-list');
  };

  return (
    <div className="flex flex-col gap-4 p-5">
      <button
        onClick={handleClick}
        className="p-2 font-bold text-white bg-blue-500 hover:bg-blue-700 rounded-lg ">
        Source List{' '}
      </button>

      <NavLink to="/files-list">
        <button className="p-2 font-bold text-white bg-blue-500 hover:bg-blue-700 rounded-lg">
          Files List
        </button>
      </NavLink>
    </div>
  );
};

export default Buttons;
