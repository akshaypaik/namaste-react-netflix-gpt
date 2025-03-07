import React from 'react'
import { TMDB_IMAGE_CDN } from '../../../../utils/constants'
import './MovieCard.css';

const MovieCard = ({movieData}) => {
  return (
    <div className='w-48 cursor-pointer'>
        <img src={`${TMDB_IMAGE_CDN}${movieData?.poster_path}`} />
    </div>
  )
}

export default MovieCard