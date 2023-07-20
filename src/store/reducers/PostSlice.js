import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    post:{}

}
const PostSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
      setPost:(state,action)=>{
          state.post = action.payload
      }
    },
  });
  
  export const { setPost } = PostSlice.actions;

export default PostSlice.reducer;
