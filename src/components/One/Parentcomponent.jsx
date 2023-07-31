import React from 'react';
import ChildComponent from './Childcomponent';

const ParentComponent = () => {
  const messageq = 'Hello from Parent!';

  return (
    <div>
      <ChildComponent message={messageq} />
    </div>
  );
};

export default ParentComponent;
