import React from 'react';
import Cards from '@components/Cards';

const FilesList = () => {
  return (
    <div>
      <p className="pt-5 pl-10 text-blue-600 underline underline-offset-1">
        Upload a generic File
      </p>
      <Cards></Cards>
    </div>
  );
};
export default FilesList;
