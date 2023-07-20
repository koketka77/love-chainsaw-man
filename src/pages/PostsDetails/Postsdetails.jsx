import React from 'react'
import { useState } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import postDetails from '../../store/actions/postDetailsCreator'



const Postsdetails = () => {
    const { id } = useParams()
    const location = useLocation()
    const navigate = useNavigate()

    const { post } = useSelector((state) => state.post)
    const dispatch = useDispatch()

console.log(post);
    const onBackClick = () => {
        navigate(location.state?.from || '/posts')
    }
    useEffect(() => {
        dispatch(postDetails(id))
    }, [])
    return (
        <div className='jiko'>
            {post?
                <div className='postdetails'>
                    <button onClick={onBackClick}>back</button>

                    <h1>{post?.id}</h1>
                    <h2>{post?.title}</h2>
                    <p>{post?.body}</p>
                </div> : 'loading'
            } 

        </div>
    )
}

export default Postsdetails