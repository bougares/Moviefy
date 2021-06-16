const currentOrderReducer = (state = { movies: [], totalPrice: 0 }, action) => {
  state.movies = [];
  state.totalPrice = 0;
  return state;
};

export default currentOrderReducer;
