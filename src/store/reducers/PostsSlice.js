import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    posts:[]
}
const PostsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts:(state,action)=>{
        state.posts = action.payload
    }
  },
});

export const { setPosts } = PostsSlice.actions;

export default PostsSlice.reducer;
