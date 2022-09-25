import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export const useInput = (initalValue, validators) => {
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

