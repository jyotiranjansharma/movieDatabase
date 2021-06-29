import React, { useState, useEffect } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { Row, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import dateformat from 'dateformat';
import { useHistory } from 'react-router-dom';
 
const MovieCarousel = () => {
    const history = useHistory()
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 30;
    const myloginData = JSON.parse(localStorage.getItem('myloginData'));
    const [isLogin, setIsLogin] = useState(false)
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const checkLogin = async () =>{
            if(myloginData) {
                const token = myloginData.token
                if(token) {
                    const verified = await axios.get('http://localhost:5000/api/v1/users/verify', {
                        headers:{ Authorization: token}
                    })
                    console.log(verified)
                    setIsLogin(verified.data)
                    if(verified.data === false) return localStorage.clear()
                } else {
                    setIsLogin(false)
                }
            }
        }
        checkLogin()
    }, [])
    
    // useEffect(() => {
    //     axios.get(`http://localhost:5000/api/v1/movies/allmovies`)
    //     .then((res) => {
    //         setMovies(res.data);
    //     })
    // }, [])
    
    useEffect(() => {
        const getMovies = async () => {
            const res = await axios.get('http://localhost:5000/api/v1/movies/allmovies');
            setMovies(res.data);
        }
        getMovies();
    }, [])

    const movieDetail = (id, name) => () => {
        if(id) {
            history.push({
                pathname: `/movie/${id}/${name}`,
            })
        }
    }

    return (
        <React.Fragment>
            <Row className="mt-3">
                <h2 style={{ padding: `0 ${chevronWidth}px` }}>Movies</h2>
                <div style={{ padding: `0 ${chevronWidth}px` }}>
                    <ItemsCarousel
                        requestToChangeActive={setActiveItemIndex}
                        activeItemIndex={activeItemIndex}
                        numberOfCards={5}
                        gutter={20}
                        leftChevron={<FontAwesomeIcon icon={faArrowLeft} />}
                        rightChevron={<FontAwesomeIcon icon={faArrowRight} />}
                        outsideChevron
                        chevronWidth={chevronWidth} className="movieCarousel">
                        {movies.map((movie) => (
                            <Card style={{ width: '14rem', cursor: 'pointer' }} key={(movie.id).toString()} onClick={movieDetail(movie.id, movie.title)}>
                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w200/` + movie.poster_path} style={{minHeight: 335}}/>
                                <Card.Body >
                                    <Card.Title><h6 style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{movie.original_title}</h6></Card.Title>
                                    <Card.Text>{dateformat(movie.release_date, "mmmm dS, yyyy")}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </ItemsCarousel>
                </div>
            </Row>
        </React.Fragment>
    );
};

export default MovieCarousel;