import React from "react";
import Vista from "../vistaPelicula/vista"

const Home = ({movies,getMovieData}) => {
    return (
       <Vista movies={movies} getMovieData = {getMovieData}/>
    )
}

export default Home;