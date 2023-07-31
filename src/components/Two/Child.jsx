import React from 'react';

const Child = (props) => {
  const sendMessage = () => {
    props.onClick('Hello from Child!');
  };

  return (
    <div>
      <button onClick={sendMessage}>Send Message to Parent</button>
    </div>
  );
};

export default Child;