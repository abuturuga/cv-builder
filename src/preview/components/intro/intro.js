import React from 'react';

export default ({firstName, lastName, headLine, summary}) => {
  return (
    <div className="preview-info">
      <h1 className="full-name">{firstName} &nbsp; {lastName}</h1> 
    </div>
  );
};
