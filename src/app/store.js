import { configureStore } from '@reduxjs/toolkit';

function postsReducer(state = [], action) {
  // if (action.type === 'SET_POSTS') {
  //   return action.payload;
  // }
  // return state;

  switch (action.type) {
    case 'SET_POSTS':
      return action.payload;
    default:
      return state;
  }
}

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
