import { configureStore } from '@reduxjs/toolkit';
import PostsSlice from './reducers/PostsSlice';
import PostSlice from './reducers/PostSlice';
const store = configureStore({
  reducer: {
    posts: PostsSlice,
    post: PostSlice,

  },
});

export default store;