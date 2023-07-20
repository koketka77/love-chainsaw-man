import React from 'react'
import fullposts from '../../store/actions/fullpostsCreator'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Link } from 'react-router-dom'
const Posts = () => {
    const { posts } = useSelector((state) => state.posts)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fullposts())
    }, [])
    return (
        <div className='container'>
            {posts.length > 0 ? posts?.map((el) => {

                return (
                    <div className="post">
                        <div>
                            <h1>{el.id}</h1>
                            <h2>{el.title}</h2>
                            <p>{el.body.length > 20 ? <><span>{el.body.substr(0, 20)}</span><Link to={`/posts/${el.id}`}>  more...</Link></> : el.body}</p>
                        </div>
                        <div className="buttonOnUser"><Link to={`/posts/${el.id}`}><button className="buttonOnUser">details</button></Link></div>
                    </div>
                )

            })

                : 'loading...'}
        </div>
    )
}

export default Posts