import './vista.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


const Vista = ({ movies, getMovieData }) => {

    const navigate = useNavigate();
    const [cargando, setCargando] = useState(false);

    async function reviews(movieId) {
        setCargando(true);
        await getMovieData(movieId).then(() => {setCargando(false)});
        navigate(`/Reviews/${movieId}`);
    }

    return (
        <div className='movie-carousel-container'>
            <Carousel>
                {
                    movies?.map((movie) => {
                        return (
                            <Paper key={movie.imdbId}>
                                <div className='movie-card-container'>
                                    <div className="movie-card" style={{ "--img": `url(${movie.backdrops[5]})` }}>
                                        <div className="movie-detail">
                                            <div className="movie-poster">
                                                <img src={movie.poster} alt="" />
                                            </div>
                                            <div className="movie-title">
                                                {movie.title}
                                            </div>
                                            <div className="movie-buttons-container">
                                                <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                                    <FontAwesomeIcon className = "play-button-icon" icon={faYoutube} size="sm"/>
                                                </Link>

                                                <div className="movie-review-button-container">
                                                    <Button variant="info" onClick={() => reviews(movie.imdbId)} >
                                                     {cargando ? 'Loading...' : 'Reviews'}
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Vista