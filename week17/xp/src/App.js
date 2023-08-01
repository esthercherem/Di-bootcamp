// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment, incrementByAmount } from "./redux/counter";
// import "./App.css";

// export default function App() {
//   const { count } = useSelector((state) => state.counter);
//   const dispatch = useDispatch();
//   return (
//     <div className="App">
//       <h1> The count is: {count}</h1>
//       <button onClick={() => dispatch(increment())}>increment</button>
//       <button onClick={() => dispatch(decrement())}>decrement</button>
//       <button onClick={() => dispatch(incrementByAmount(33))}>
//         Increment by 33
//       </button>
//     </div>
//   );
// }



// excercise 2 

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNextDay, setPreviousDay } from "./redux/counter";
import "./App.css";

export default function App() {
  const { currentDay } = useSelector((state) => state.day);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1> Today is: {currentDay}</h1>
      <button onClick={() => dispatch(setPreviousDay())}>previous day</button>
      <button onClick={() => dispatch(setNextDay())}>next day</button>
      
     
    </div>
  );
}