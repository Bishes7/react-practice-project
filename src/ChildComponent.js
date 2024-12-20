import React from "react";

const ChildComponent = ({ dataOnChange }) => {
  const sendDataToParent = () => {
    const childData = "Hello from Child";
    dataOnChange(childData);
  };
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={sendDataToParent}>Send Data To Parent</button>
    </div>
  );
};

export default ChildComponent;
