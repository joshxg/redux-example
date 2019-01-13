function reducer(state = { value: 0, fact: null }, action) {
  switch (action.type) {
    case "SET_FACT":
      return { ...state, fact: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default reducer;
