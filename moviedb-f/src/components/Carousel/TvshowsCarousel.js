import React, { useState, useEffect } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { Row, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';
import dateFormat from 'dateformat';
import axios from 'axios';

const TvCarousel = () => {
    const history = useHistory()
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 30;
    const [tvs, setTvs] = useState([])

    useEffect(() => {
        const getTvs = async () => {
            const res = await axios.get('http://localhost:5000/api/v1/tv/alltv');
            setTvs(res.data);
        }
        getTvs();
    }, [])

    const tvDetail = (id) => () => {
        if(id) {
            history.push({
                pathname: `/tv/${id}`,
            })
        }
    }

    return (
        <React.Fragment>
            <Row className="mt-3">
                <h2 style={{ padding: `0 ${chevronWidth}px` }}>TV Shows</h2>
                <div style={{ padding: `0 ${chevronWidth}px` }}>
                    <ItemsCarousel
                        requestToChangeActive={setActiveItemIndex}
                        activeItemIndex={activeItemIndex}
                        numberOfCards={5}
                        gutter={20}
                        leftChevron={<FontAwesomeIcon icon={faArrowLeft} />}
                        rightChevron={<FontAwesomeIcon icon={faArrowRight} />}
                        outsideChevron
                        chevronWidth={chevronWidth}>
                        {tvs.map((tv) => (
                            <Card style={{ width: '14rem', cursor: 'pointer' }} key={(tv._id).toString()} onClick={tvDetail(tv._id)}>
                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/` + tv.poster_path} style={{minHeight: 335}}/>
                                <Card.Body >
                                    <Card.Title><h6 style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{tv.name}</h6></Card.Title>
                                    <Card.Text>{dateFormat(tv.first_air_date, "mmmm dS, yyyy")}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </ItemsCarousel>
                </div>
            </Row>
        </React.Fragment>
    );
};

export default TvCarousel;