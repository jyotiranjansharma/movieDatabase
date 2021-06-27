import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Container, Row, Image, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import dateFormat from 'dateformat';

const MovieDetail = () => {
    const {id} = useParams();
    const [movieDetails, setMovieDetails] = useState([])

    useEffect(() => {
        const fetchMovieDetails = async () => {
            // const res = await axios.get(`http://localhost:5000/api/v1/movies/get-movie-details/${id}`);
            const res = await axios.get(`http://localhost:5000/api/v1/movies/movie/${id}`);
            setMovieDetails(res.data);
        }
        fetchMovieDetails();
    }, [])
    console.log(movieDetails)

    return (
        <React.Fragment>
            <Header/>
            <Container>
                <Row className="p-3">
                    <Col sm={9} style={{ backgroundImage: `url("https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: 360 }}>
                        <Image src={`https://image.tmdb.org/t/p/w500` + movieDetails.poster_path} style={{height: 360, padding: 15}}></Image>
                    </Col>
                    <Col sm={3}>
                        <h5 className="text-uppercase">{movieDetails.title}</h5>
                        <h6>Released On: {dateFormat(movieDetails.release_date, "mmmm dS, yyyy")}</h6>

                    </Col>
                    <Col sm={9}>
                        <p>{movieDetails.overview}</p>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </React.Fragment>
    )
}

export default MovieDetail;