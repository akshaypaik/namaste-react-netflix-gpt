import React, { useRef, useState } from 'react';
import Header from '../Header/Header';
import './Login.css';
import { NETFLIX_BG_IMAGE } from '../../utils/constants';
import { checkValidData } from '../../utils/validateLogin';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { useSelector } from 'react-redux';


const Login = () => {

    const [showLoginForm, setShowLoginForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const userName = useRef(null);
    const userDetails = useSelector((store) => store.user.userDetails);
    // console.log("use selector userDetails: ", userDetails);


    const toggleSignInForm = () => {
        setShowLoginForm(!showLoginForm);
    }

    const handleButtonClick = () => {
        // validate form data
        const responseMessage = checkValidData(email.current.value, password.current.value);
        setErrorMessage(responseMessage);

        if (responseMessage) return;

        //sign up
        if (!showLoginForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: userName.current.value, photoURL: "https://avatars.githubusercontent.com/u/32700271?s=48&v=4"
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid, email, displayName, photoURL }));
                    }).catch((error) => {
                        // An error occurred
                    });
                    // console.log("sign up user response: ", user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(`${errorCode}: ${errorMessage}`);
                });
        }   // sign in
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // console.log("sign in user response: ", user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(`${errorCode}: ${errorMessage}`);
                });
        }
    }

    return (
        <div>
            <Header />
            <div className='absolute w-screen h-screen'>
                <img src={NETFLIX_BG_IMAGE} alt='Netflix BG' className='h-screen object-cover w-screen' />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='p-12 bg-black/80 fixed h-160 w-full sm:w-full md:w-3/12 my-36 mx-auto right-0 left-0 text-white'>
                <div>
                    <h1 className='font-bold text-3xl py-4'>{showLoginForm ? "Sign In" : "Sign Up"}</h1>
                    {!showLoginForm &&
                        <input type='text'
                            ref={userName}
                            placeholder='Full Name'
                            className='p-4 my-4 w-full bg-gray-700' />}
                    <input type='text'
                        ref={email}
                        placeholder='Email Address'
                        className='p-4 my-4 w-full bg-gray-700' />
                    <input type='password'
                        ref={password}
                        placeholder='Password'
                        className='p-4 my-4 w-full bg-gray-700' />
                    <p className='text-red-500 font-bold text-lg py-3'>{errorMessage}</p>
                    <button
                        className='p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer' onClick={handleButtonClick}>
                        {showLoginForm ? "Sign In" : "Sign Up"}
                    </button>
                    <div>
                        <span className='text-gray-400'>
                            {showLoginForm ? "New to Netflix?" : "Already an User?"}
                        </span>
                        <span className='font-bold cursor-pointer p-2' onClick={toggleSignInForm}>
                            {showLoginForm ? "Sign Up Now" : "Sign In Now"}
                        </span>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login