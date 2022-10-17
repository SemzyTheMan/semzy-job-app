import React, { useState, useEffect } from "react";
const DarkThemeContext = React.createContext();

const mainColors = [
  { bg: "#000", txt: "#eee" },
  { bg: "#eee", txt: "#000" },
];

const DarkThemeProvider = ({ children }) => {
  const [turnOn, setTurnOn] = useState(false);
  const [mainColor, setMainColor] = useState(mainColors[0]);

  useEffect(() => {
    const color = turnOn ? mainColors[0] : mainColors[1];
    setMainColor(color);
  }, [turnOn]);

  return (
    <DarkThemeContext.Provider
      value={{ turnOn, setTurnOn, mainColor, setMainColor }}
    >
      {children}
    </DarkThemeContext.Provider>
  );
};

export { DarkThemeContext, DarkThemeProvider };
