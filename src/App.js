import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ChildComponent from "./ChildComponent";

function App() {
  const [data, setData] = useState("");

  // Function to handle data from the child
  const handleDataFromChild = (childData) => {
    setData(childData);
  };

  return (
    <div>
      <h1>Parent Componentd </h1>
      <p>Data from child: {data}</p>
      <ChildComponent dataOnChange={handleDataFromChild} />
    </div>
  );
}

export default App;
