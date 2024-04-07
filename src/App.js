import './App.css';
import api from './apiComunication/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './Componentes/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './Componentes/inicio/Inicio';
import Header from './Componentes/cabezaPagina/Header';
import Trailer from './Componentes/trailer/Trailer';
import Reviews from './Componentes/reviews/Reviews';
import NotFound from './Componentes/notFound/NotFound';

function App() {

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();

  const getMovies = async () =>{
    
    try
    {

      const response = await api.get("/movies");

      setMovies(response.data);

    } 
    catch(err)
    {
      console.log(err);
    }
  }

  const getMovieData = async (id) => {
     
    try 
    {
        const response = await api.get(`/movies/${id}`);

        const singleMovie = response.data;

        setMovie(singleMovie);

        setReviews(singleMovie.reviewIds);
        

    } 
    catch (error) 
    {
      console.error(error);
    }

  }

  useEffect(() => {
    getMovies();
  },[])

  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home movies={movies} getMovieData = {getMovieData} />} ></Route>
            <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
            <Route path="/Reviews/:movieId" element ={<Reviews movie={movie} reviews ={reviews} setReviews = {setReviews} />}></Route>
            <Route path="/*" element = {<NotFound/>}></Route>
          </Route>
      </Routes>

    </div>
  );
}

export default App;