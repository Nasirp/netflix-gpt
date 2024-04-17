import {useSelector} from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";
const VideoBackground = ({movieId}) => {

   const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  //  console.log(trailerVideo);
   useMovieTrailer(movieId);
  
  return (
    <div >
     {/* <iframe 
      className="w-screen  aspect-video"
       src={"https://www.youtube.com/embed/"+ trailerVideo?.key +" ?&autoplay=1&mute=1"}
       title="YouTube video player" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       ></iframe> */}
       <iframe
        className="w-full aspect-video"
        src={"https://www.youtube.com/embed/Way9Dexny3w?si=mIBgkkb3b7J4CVL9" + trailerVideo?.key +" ?&autoplay=1&mute=1"}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        ></iframe>
    </div>
  )
}

export default VideoBackground
