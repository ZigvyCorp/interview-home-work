import React from "react";
import { MyButton } from "@/components";
import { selectCounter } from "@/store/features/counter/counterSelectors";
import { counterActions } from "@/store/features/counter/counterSlice";
import { useAppSelector } from "@/store/hooks";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  const counter = useAppSelector(selectCounter);

  return (
    <div>
      <h1>{counter.count}</h1>
      <MyButton onClick={() => dispatch(counterActions.increase(10))} />
    </div>
  );
};

export default HomePage;
