import React from 'react';
import '../Styles/HomeStyles/watched.css';
import {
    Container,Row,Col
}from 'reactstrap';
import Big from '../../Images/big.png';
import Small1 from '../../Images/small1.png';
import Small2 from '../../Images/small2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';

const Watched = () => {
    return (
        <div className="watched">
            <Container>
                <Row className='row'>
                    <Col className="col-md-6">
                        <h1>Recipe videos that never misses any portion</h1>
                        <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women.</p>
                        <div className="play">
                            <FontAwesomeIcon icon={icons.faPlay}  className="myicon"/>
                        </div>
                        <h3>Watch Video</h3>
                        <h5>You will love our execution</h5>
                    </Col>
                    <Col className="col-md-6">
                        <img src={Big} className="big"/>
                        <img src={Small1} className="small1"/>
                        <img src={Small2} className="small2"/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Watched;