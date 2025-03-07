import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../constants";
import { addPopularMovies } from "../ReduxStore/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = async () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?with_original_language=hi', TMDB_API_OPTIONS);
        const jsonData = await data.json();
        console.log("tmdb Popular movies: ", jsonData);
        dispatch(addPopularMovies(jsonData.results));
    }

    useEffect(() => {
        getPopularMovies();
    }, []);
}

export default usePopularMovies;