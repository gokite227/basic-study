import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useInput = (initalValue, validators) => {
  const [value, setValue] = useState(initalValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validators === "function") {
      willUpdate = validators(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return{ value, onChange};
};

export default function App() {
  const maxLen = (value) => value.length < 10;
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}
