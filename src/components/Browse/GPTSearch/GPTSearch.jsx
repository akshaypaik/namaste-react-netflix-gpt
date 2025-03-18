import React from 'react'
import GPTSearchBar from './GPTSearchBar/GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions/GPTMovieSuggestions'
import { NETFLIX_BG_IMAGE } from '../../../utils/constants'

const GPTSearch = () => {

    return (
        <div className='w-full h-dvh'>
            <div className='absolute -z-10'>
                <img src={NETFLIX_BG_IMAGE} alt='Netflix BG' className='h-screen object-cover md:w-screen' />
            </div>
            <div className='md:pt-36 pt-48'>
                <GPTSearchBar />
                <GPTMovieSuggestions />
            </div>
        </div>
    )
}

export default GPTSearch