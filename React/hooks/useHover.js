import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export const useHovver = onHover => {
    if (typeof onHover !== "function") {
        return;
    }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", onHover);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", onHover);
      }
    };
  }, []);
  return element;
};

