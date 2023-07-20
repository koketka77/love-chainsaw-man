import { setPost } from "../reducers/PostSlice";
function postDetails(id) {
    
    return async (dispatch) => {  
        try {
            fetch(`http://localhost:3642/posts/${id}`)
                .then((res) => res.json())
                .then((data) => dispatch(setPost(data)))
                .catch((err) => console.log(err))
        } catch (err) {
            console.log(err);
        }
    }
}

export default postDetails