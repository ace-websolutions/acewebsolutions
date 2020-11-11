
import React, { useState, createContext } from "react";

export const PageContext = createContext();

export const PageProvider = (props) => {
    const [leftPage, setLeftPage] = useState(null)
    const [rightPage, setRightPage] = useState('about')

  return (
    <PageContext.Provider value={{ leftPage, setLeftPage, rightPage, setRightPage }}>
      {props.children}
    </PageContext.Provider>
  );
};