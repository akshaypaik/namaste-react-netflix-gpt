import React from 'react'

const VideoTitle = ({ title, description }) => {
  return (
    <div className='absolute pt-72 px-12 text-white bg-gradient-to-r from-black w-screen aspect-video'>
        <h1 className='text-lg -mt-36 md:mt-0 md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-sm w-1/4'>{description}</p>
        <div className='flex items-center gap-4'>
            <button className='block p-2 bg-white text-black font-bold cursor-pointer md:px-4 rounded-sm hover:bg-white/60'>▶Play</button>
            <button 
            className='p-2 bg-gray-400/50 text-white font-bold flex cursor-pointer gap-2 hover:bg-gray-400/80 md:px-4 rounded-sm'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="CircleIStandard" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"></path></svg>
            <span>More Info</span>
            </button>
        </div>
    </div>
  )
}

export default VideoTitle