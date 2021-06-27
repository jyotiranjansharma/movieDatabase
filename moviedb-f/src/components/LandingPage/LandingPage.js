import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import { Container } from 'react-bootstrap';
import MovieCarousel from '../Carousel/MovieCarousel';
import Footer from '../Footer/Footer';
import TvshowsCarousel from '../Carousel/TvshowsCarousel';

const Landing = () => {
    return(
        <React.Fragment>
            <Header/>
            <Container>
                <Banner pageHeader="The Movie DB" pageSubHeader="Million of movies to discover. Explore now"/>
                <MovieCarousel/>
                <TvshowsCarousel/>
            </Container>
            <Footer/>
        </React.Fragment>
    )
}

export default Landing;