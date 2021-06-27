import React from 'react';
import { Form, Row, Col, Button, FormControl, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Banner = (props) => {
    
    return(
        <React.Fragment>
            <Row className="p-3" style={{ backgroundImage: `url("/relatedImages/banner4.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: 360 }}>
                <div className="p-5">
                    <div className="title">
                        <h2 className="text-capitalize font-italic text-light">{props.pageHeader}</h2>
                        <h3 className="font-italic text-light">{props.pageSubHeader}</h3>
                    </div>
                    <div className="search">
                        <Form>
                            <InputGroup className="mb-3">
                                <FormControl
                                placeholder="Search for a movie"
                                aria-label="Search for a movie"
                                aria-describedby="search-movie"
                                name="SearchData"
                                />
                                <Button variant="btn btn-info outline-secondary" id="movie-search-button" type="submit"><FontAwesomeIcon icon={faSearch} /></Button>
                            </InputGroup>
                        </Form>
                    </div>
                </div>
            </Row>
        </React.Fragment>
    );
}

export default Banner;