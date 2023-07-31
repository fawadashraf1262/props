import React from 'react';
import Child from './Child';

const Parent = () => {
  const handleClick = (message) => {
    alert(`Message from Child: ${message}`);
  };

  return (
    <div>
      <Child onClick={handleClick} />
    </div>
  );
};

export default Parent;