import React from 'react';
import {Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faInstagram, faGithub, faGoogle, fa500px } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return(
        <React.Fragment>
            <footer className="text-center text-lg-start bg-dark text-muted mt-3">
                <Container>
                    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                        <div className="me-5 d-none d-lg-block">
                            <span>Get connected with us on social networks:</span>
                        </div>
                        <div>
                            <a href="" className="me-4 text-reset">
                                <FontAwesomeIcon icon={ faTwitter } />
                            </a>
                            <a href="" className="me-4 text-reset">
                                <FontAwesomeIcon icon={ faFacebook } />
                            </a>
                            <a href="" className="me-4 text-reset">
                                <FontAwesomeIcon icon={ faInstagram } />
                            </a>
                            <a href="" className="me-4 text-reset">
                                <FontAwesomeIcon icon={ faGoogle } />
                            </a>
                            <a href="" className="me-4 text-reset">
                                <FontAwesomeIcon icon={ faGithub } />
                            </a>
                            <a href="" className="me-4 text-reset">
                                <FontAwesomeIcon icon={ fa500px } />
                            </a>
                        </div>
                    </section>
                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-3">
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 className="fw-bold mb-4">
                                        <FontAwesomeIcon icon={ faFilm } /> The MovieDB
                                    </h6>
                                    <p>
                                        Browse through millions of Movies and Tv Shows, And  your favorite people.
                                    </p>
                                </div>
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        Our pages
                                    </h6>
                                    <p>
                                        <a href="#!" className="text-reset">Movies</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">TV Shows</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">People</a>
                                    </p>
                                </div>
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        Useful links
                                    </h6>
                                    <p>
                                        <a href="#!" className="text-reset">login</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Join us</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </Container>
            </footer>
        </React.Fragment>
    );
}

export default Footer;