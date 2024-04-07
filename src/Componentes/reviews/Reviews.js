import {useState, useRef} from 'react';
import api from '../../apiComunication/axiosConfig';
import {useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';
import './Reviews.css';


import React from 'react'

const Reviews = ({movie,reviews,setReviews}) => {
    
    const [errormensaje, setErrormensaje] = useState('');


    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;


    const addReview = async (e) =>{
        e.preventDefault();

        const rev = revText.current;

        try
        {
            const response = await api.post("/reviews",{body:rev.value,imdbId:movieId});

            const updatedReviews = [...reviews, response.data];
    
            rev.value = "";

            setReviews(updatedReviews);

            setErrormensaje('');
        }
        catch(err)
        {
            setErrormensaje(err.response.data);
        }

    }
    return (
    <div className='reviews-container'>
    <Container>
        <Row>
            <Col><h3>Reviews de {movie?.title}</h3></Col>
        </Row>
        <Row className="mt-2">
            <Col>
                <img src={movie?.poster} alt="" />
            </Col>
            <Col>
                {
                    <>
                        <Row>
                            <Col>
                                    <ReviewForm handleSubmit={addReview} revText={revText} labelText = "Escribe una Reseña" errorMessage={errormensaje}/>  
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr className='my-hr'/>
                            </Col>
                        </Row>
                    </>
                }
                {
                    reviews?.map((r) => {
                        return(
                            <>
                                <Row>
                                    <Col>{r.body}</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr className='my-hr' />
                                    </Col>
                                </Row>                                
                            </>
                        )
                    })
                }
            </Col>
        </Row>
        <Row>
            <Col>
                <hr className='my-hr'/>
            </Col>
        </Row>        
    </Container>

    </div> 
   
  )
}

export default Reviews