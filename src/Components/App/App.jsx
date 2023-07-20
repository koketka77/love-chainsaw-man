import React from 'react'
import Main from '../Main/Main'
import Header from '../Header/Header'
import { Posts,Postsdetails } from '../../pages'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import '../style.css'

const App = () => {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/posts' element={<Posts />} />
                    <Route path='/posts/:id' element={<Postsdetails />} />

                    <Route path='*' element={<h1>there's nothing man ngl, go back to posts asap</h1>} />
                </Routes>


            </Router>
        </div>
    )
}

export default App