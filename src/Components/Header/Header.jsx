import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='headers-underline'>
      <div className='header'>
        <Link to={'/'}>Main</Link>
        <Link to={'/ygjhuilkfgh'}>About</Link>
        <Link to={'/posts'}>Posts</Link>
        </div>
    </div>
  )
}

export default Header