import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Container, Row, Image, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import dateFormat from 'dateformat';

const MovieDetail = () => {
    const {id, name} = useParams();
    const [movieDetails, setMovieDetails] = useState([])

    useEffect(() => {
        const fetchMovieDetails = async () => {
            // const res = await axios.get(`http://localhost:5000/api/v1/movies/get-movie-details/${id}`);
            const res = await axios.get(`http://localhost:5000/api/v1/movies/movie/${id}/${name}`);
            setMovieDetails(res.data);
        }
        fetchMovieDetails();
    }, [])
    console.log(movieDetails)

    return (
        <React.Fragment>
            <Header/>
            <Container>
                {movieDetails.map((movie) => (
                    <Row className="p-3" key={(movie.id).toString()}>
                        <Col sm={9} style={{ backgroundImage: `url("https://image.tmdb.org/t/p/w500${movie.backdrop_path}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: 360 }}>
                            <Image src={`https://image.tmdb.org/t/p/w500` + movie.poster_path} style={{height: 360, padding: 15}}></Image>
                        </Col>
                        <Col sm={3}>
                            <h5 className="text-uppercase">{movie.title}</h5>
                            <h6>Status Now </h6> {movie.status}
                            <h6>Released On: </h6>{dateFormat(movie.release_date, "mmmm dS, yyyy")}
                            <h6>Runtime </h6> {movie.runtime} Mins
                            <h6>Language</h6> {movie.original_language}
                            <h6>Reach out for more info <a href={movie.homepage} target="_blank">here</a></h6>
                        </Col>
                        <Col sm={9} className="p-3">
                            <h6>Overview</h6>
                            <p>{movie.overview}</p>
                            <h6>Production Houses</h6>
                            <div className="d-flex justify-content-between">
                                {movie.production_companies.map((production) => (
                                    <p>{production.name}  <Image src={`https://image.tmdb.org/t/p/w500` + production.logo_path} alt="" style={{width: 50}}></Image></p>
                                ))}
                            </div>
                        </Col>
                    </Row>
                ))}
            </Container>
            <Footer/>
        </React.Fragment>
    )
}

export default MovieDetail;