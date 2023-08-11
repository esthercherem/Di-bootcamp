const initialState = {
    age: 20
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "AGE_UP":
        return {...state, age: state.age + 1}; //...state  // Add for best practices
      case "AGE_DOWN":
        return {...state,age: state.age - 1};  //...state (spread operator)
      default:
        return state;
    }
  };
  
  export default reducer;