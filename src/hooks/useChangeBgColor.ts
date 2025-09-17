import { useState } from "react";


export const COLORS = ['lightblue','lightgreen','lightpink','white'];

type UseChangeBgColor = () => {
  currentColorIndex: number;
  changeColor: () => void;
};


export const useChangeBgColor: UseChangeBgColor = () => {


  const [currentColorIndex, setcurrentColorIndex] = useState(0);

  const changeColor = () => {
    setcurrentColorIndex((prevState) => (prevState + 1) % COLORS.length);
  };

  return{currentColorIndex,changeColor};
};