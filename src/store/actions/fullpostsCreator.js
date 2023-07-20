import { setPosts } from "../reducers/PostsSlice";
function fullposts() {
    return async (dispatch) => {
        try {
            fetch('http://localhost:3642/posts')
                .then((res) => res.json())
                .then((data) => dispatch(setPosts(data)))
                .catch((err) => console.log(err))
        } catch (err) {
            console.log(err);
        }
    }
}

export default fullposts