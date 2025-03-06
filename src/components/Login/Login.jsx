import React, { useState } from 'react';
import Header from '../Header/Header';
import './Login.css';
import { NETFLIX_BG_IMAGE } from '../../utils/constants';

const Login = () => {

    const [showLoginForm, setShowLoginForm] = useState(true);

    const toggleSignInForm = () => {
        setShowLoginForm(!showLoginForm);
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src={NETFLIX_BG_IMAGE} alt='Netflix BG' className='' />
            </div>
            <form className='p-12 bg-black/80 absolute h-140 w-3/12 my-36 mx-auto right-0 left-0 text-white'>
                <div>
                    <h1 className='font-bold text-3xl py-4'>{showLoginForm ? "Sign In" : "Sign Up"}</h1>
                    {!showLoginForm && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />}
                    <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' />
                    <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />
                    <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{showLoginForm ? "Sign In" : "Sign Up"}</button>
                    <div>
                        <span className='text-gray-400'>{showLoginForm ? "New to Netflix?" : "Already an User?"} </span>
                        <span className='font-bold cursor-pointer p-2' onClick={toggleSignInForm}>{showLoginForm ? "Sign Up Now" : "Sign In Now"}</span>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login