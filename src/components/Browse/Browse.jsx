import React from 'react'
import Header from '../Header/Header';
import useNowPlayingMovies from '../../utils/CustomHooks/useNowPlayingMovies';
import MainContainer from './MainContainer/MainContainer';
import SecondaryContainer from './SecondaryContainer/SecondaryContainer';
import usePopularMovies from '../../utils/CustomHooks/usePopularMovies';
import useTopRatedMovies from '../../utils/CustomHooks/useTopRatedMovies';
import useUpcomingMovies from '../../utils/CustomHooks/useUpcomingMovies';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

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