// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./counter";

// export default configureStore({
//   reducer: {
//     counter: counterReducer
//   }
// });




// excercise 2 

import { configureStore } from "@reduxjs/toolkit";
import dayReducer from "./counter";

export default configureStore({
  reducer: {
    day: dayReducer
  }
});

