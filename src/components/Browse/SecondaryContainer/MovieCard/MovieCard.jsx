import React from 'react'
import { TMDB_IMAGE_CDN } from '../../../../utils/constants'
import './MovieCard.css';

const MovieCard = ({movieData}) => {
  return (
    <div className='w-36 md:w-48 cursor-pointer movie-poster'>
        <img src={`${TMDB_IMAGE_CDN}${movieData?.poster_path}`} />
    </div>
  )
}

export default MovieCard