const initialState = {
    counterA: 0,
    name: 'you'
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_A':
      return Object.assign({}, state, {
        counterA: state.counterA + 1
      });
    default:
      return state
  }
}

export default counterReducer;