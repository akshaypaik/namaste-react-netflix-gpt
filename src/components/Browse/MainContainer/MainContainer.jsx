import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle/VideoTitle";
import VideoBackground from "./VideoBackground/VideoBackground";

const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if(movies.length === 0) return;

    const mainMovie = movies[0];
    const { original_title, overview, id } = mainMovie;
    console.log("mainMovie: ", mainMovie);
    

    return (
        <div className="pt-[40%] bg-black md:pt-0">
            <VideoTitle title={original_title} description={overview}/>
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer;