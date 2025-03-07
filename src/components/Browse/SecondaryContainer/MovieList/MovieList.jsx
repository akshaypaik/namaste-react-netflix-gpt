import React, { useRef } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css';

const MovieList = ({ title, movies }) => {

    const scrollRef = useRef(null);

    const handleScroll = (scrollDirection) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 1000;

            if (scrollDirection === "left") {
                current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        }
    }

    return (
        <div className='text-white'>
            <h1 className='text-4xl font-semibold py-4 overflow-hidden'>{title}</h1>
            <div className='text-white flex items-center overflow-x-hidden' ref={scrollRef}>
                <button className='absolute left-0 cursor-pointer bg-gradient-to-l from-white/30 h-48' onClick={() => handleScroll('left')}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-12 h-12"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                    </svg></button>
                <div className='flex gap-8'>
                    {movies.map((movie) => <MovieCard key={movie.id} movieData={movie} />)}
                </div>
                <button className='absolute right-0 cursor-pointer bg-gradient-to-l from-black h-48' onClick={() => handleScroll('right')}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-12 h-12"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5L15.75 12l-7.5 7.5"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default MovieList