import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS } from "../constants";
import { addTrailerVideo } from "../ReduxStore/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = async(movieId) => {
    const dispatch = useDispatch();
    const trailerVideoData = useSelector((store) => store.movies.trailerVideo)
    
    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=hi-IN`, TMDB_API_OPTIONS);
        const jsonData = await data.json();
        console.log("movie id data: ", jsonData);

        const filteredTrailerData = jsonData.results.filter((video) => video.type === "Trailer");
        const trailerVideo = filteredTrailerData.length ? filteredTrailerData[0] : jsonData.results[0];
        console.log("trailer: ", trailerVideo);
        dispatch(addTrailerVideo(trailerVideo));
    }

    useEffect(() => {
        // Memoization
        !trailerVideoData && getMovieVideos();
    }, []);
}

export default useMovieTrailer;