import React from 'react';
import Header from '../Header/Header';
import { Container, Row, Card, Button, Col, InputGroup, FormControl, ListGroup } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Footer from '../Footer/Footer';
import { useHistory } from 'react-router';
import axios from 'axios';

const MovieGridView = (props) => {
    const [movies, setMovies] = useState([])
    const [genres, setGenres] = useState([])
    const history = useHistory()

    const useStyleCard = {
        width: '18rem',
        margin: '0em 1em 1em 1em',
        boxShadow: '2px 6px 8px 0 rgba(22, 22, 26, 0.18)',
        border: 'none',
        borderRadius: 0
    }

    const useStyleListBox = {
        display: 'inline-flex',
        border: '1px solid #9e9e9e',
        borderRadius: '14px',
        padding: '4px 12px',
        fontSize: '0.9em',
        marginRight: '6px',
        marginTop: '8px',
        width: 'max-content'
    }

    const useStyleFilterBox = {
        boxShadow: '0 2px 8px rgb(0 0 0 / 10%)',
        border: '1px solid #e3e3e3',
        padding: 10,
        borderRadius: 7
    }

    useEffect(() => {
        const getMovies = async () => {
            const res = await axios.get('http://localhost:5000/api/v1/movies/allmovies');
            setMovies(res.data);
        }
        getMovies();
    }, [])

    useEffect(() => {
        const getGenres = async () => {
            const res = await axios.get('http://localhost:5000/api/v1/category/genres');
            setGenres(res.data);
        }
        getGenres();
    }, [])

    const movieDetail = (id) => () => {
        if(id) {
            history.push({
                pathname: `/movie/${id}`,
            })
        }
    }

    return (
        <React.Fragment>
            <Header/>
            <Container>
                <h4 className="mt-3 mb-3">Popular Movies</h4>
                <Row>
                    <Col sm={3} md={3}>
                        <div className="filter-container">
                            <div className="mb-3" style={useStyleFilterBox}>
                                <h5>Search Movie</h5>
                                <div className="panel">
                                    <InputGroup className="mb-3">
                                        <FormControl
                                        placeholder="Movie"
                                        aria-label="Movie"
                                        aria-describedby="basic-addon2"
                                        />
                                        <InputGroup.Text id="basic-addon2"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                                    </InputGroup>
                                </div>
                            </div>
                            <div className="mb-3" style={useStyleFilterBox}>
                                <h5>Genres</h5>
                                <div className="panel">
                                    <ul style={{listStyleType: 'none', padding: 0}}>
                                        {genres.map((genre) => (
                                            <li style={useStyleListBox} key={(genre._id).toString()} data-id={genre.id}>{genre.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={9} md={9}>
                        <Row>
                        {movies.map((movie) => (
                            <Card style={useStyleCard} key={(movie._id).toString()} onClick={movieDetail(movie._id)} data-genreid={movie.genre_ids}>
                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w200/` + movie.poster_path} />
                                <Card.Body>
                                    <Card.Title>{movie.original_title}</Card.Title>
                                    <Card.Text style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{movie.overview}</Card.Text>
                                    <Button variant="dark" onClick={movieDetail(movie._id)} style={{borderRadius: 20}}>View</Button>
                                </Card.Body>
                            </Card>
                        ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </React.Fragment>
    )
}

export default MovieGridView;