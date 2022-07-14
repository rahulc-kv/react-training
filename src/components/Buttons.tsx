import React from 'react';
import { useNavigate } from 'react-router-dom';

import { HomePageBgColorMapper } from 'containers/home/constants';

const Buttons = props => {
  const { idInFocus, setIdInFocus } = props;

  const navigate = useNavigate();

  const handleClickFiles = () => {
    navigate('/files-list');
  };

  const handleClickSource = () => {
    navigate('/source-list');
  };

  const handleColorChange = id => {
    setIdInFocus(id);
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
        onClick={() => handleColorChange('Id1')}
        className={`h-12 font-bold text-gray-400 
                rounded-l shadow-md ${
                  idInFocus === 'Id1'
                    ? 'bg-' +
                      HomePageBgColorMapper[idInFocus] +
                      ' text-slate-50'
                    : 'bg-slate-50'
                }`}>
        Blue
      </button>

      <button
        onClick={() => handleColorChange('Id2')}
        className={`h-12 font-bold text-gray-400 
                 rounded-l shadow-md ${
                   idInFocus === 'Id2'
                     ? 'bg-' +
                       HomePageBgColorMapper[idInFocus] +
                       ' text-slate-50'
                     : 'bg-slate-50'
                 }`}>
        Red
      </button>

      <button
        onClick={() => handleColorChange('Id3')}
        className={`h-12 font-bold text-gray-400 
                 rounded-l shadow-md ${
                   idInFocus === 'Id3'
                     ? 'bg-' +
                       HomePageBgColorMapper[idInFocus] +
                       ' text-slate-50'
                     : 'bg-slate-50'
                 }`}>
        Yellow
      </button>
    </div>
  );
};

export default Buttons;
