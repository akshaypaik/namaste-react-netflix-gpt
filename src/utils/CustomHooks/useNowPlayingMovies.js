import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../constants";
import { addNowPlayingMovies } from "../ReduxStore/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = async () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/discover/movie?with_original_language=hi', TMDB_API_OPTIONS);
        const jsonData = await data.json();
        console.log("tmdb now playing movies: ", jsonData);
        dispatch(addNowPlayingMovies(jsonData.results));
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies;