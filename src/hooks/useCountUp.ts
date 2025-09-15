import { useState } from "react";

type useCountUp = () => {
  count: number,
  onClickCountUp: () => void;

}

export const useCountUp: useCountUp = () => {
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount((prevState) => prevState + 1);
  };


  return{
    count,
    onClickCountUp,
};

};