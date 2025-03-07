import React from 'react'
import Header from '../Header/Header';
import useNowPlayingMovies from '../../utils/CustomHooks/useNowPlayingMovies';
import MainContainer from './MainContainer/MainContainer';
import SecondaryContainer from './SecondaryContainer/SecondaryContainer';
import usePopularMovies from '../../utils/CustomHooks/usePopularMovies';
import useTopRatedMovies from '../../utils/CustomHooks/useTopRatedMovies';
import useUpcomingMovies from '../../utils/CustomHooks/useUpcomingMovies';
import GPTSearch from './GPTSearch/GPTSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const isGPTSearchActive = useSelector((store) => store.gptSearch.isGPTSearchActive);

  return (
    <div>
      <Header />
      {isGPTSearchActive ?
        <GPTSearch /> :
        <>
          <MainContainer />
          <SecondaryContainer />
        </>}
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