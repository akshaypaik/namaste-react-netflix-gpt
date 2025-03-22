import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../constants";
import { addTopRatedMovies } from "../ReduxStore/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = async () => {
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?with_original_language=hi', TMDB_API_OPTIONS);
        const jsonData = await data.json();
        // console.log("tmdb TopRated movies: ", jsonData);
        dispatch(addTopRatedMovies(jsonData.results));
    }

    useEffect(() => {
        getTopRatedMovies();
    }, []);
}

export default useTopRatedMovies;