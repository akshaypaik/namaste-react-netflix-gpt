import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../constants";
import { addUpcomingMovies } from "../ReduxStore/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = async () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?with_original_language=hi', TMDB_API_OPTIONS);
        const jsonData = await data.json();
        // console.log("tmdb Upcoming movies: ", jsonData);
        dispatch(addUpcomingMovies(jsonData.results));
    }

    useEffect(() => {
        getUpcomingMovies();
    }, []);
}

export default useUpcomingMovies;