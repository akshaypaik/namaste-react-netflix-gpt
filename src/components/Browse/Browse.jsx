import React from 'react'
import Header from '../Header/Header';
import useNowPlayingMovies from '../../utils/CustomHooks/useNowPlayingMovies';
import MainContainer from './MainContainer/MainContainer';
import SecondaryContainer from './SecondaryContainer/SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
        Main Container
          - Video Background
          - Video Title
        Secondary Container
          - Movie List * N
            - Movie Card * N
      */}
    </div>

  )
}

export default Browse