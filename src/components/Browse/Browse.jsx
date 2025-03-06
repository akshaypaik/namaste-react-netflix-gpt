import React, { useEffect } from 'react'
import Header from '../Header/Header';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../../utils/ReduxStore/userSlice';

const Browse = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div className='flex'>
      <Header />
      {/* <button onClick={handleSignOut} className='p-2 bg-red-600 rounded-lg cursor-pointer'>Sign Out</button> */}
    </div>

  )
}

export default Browse