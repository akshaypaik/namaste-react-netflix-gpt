import React from 'react'
import { TMDB_IMAGE_CDN } from '../../../../utils/constants'

const MovieCard = ({movieData}) => {
  return (
    <div className='w-48'>
        <img src={`${TMDB_IMAGE_CDN}${movieData?.poster_path}`} />
    </div>
  )
}

export default MovieCard