import React , { Component }  from 'react';
import '../Styles/HomeStyles/download.css';
import {
    Container,
    Row,Col
}from 'reactstrap';
import Big from '../../Images/big1.png';
import Small1 from '../../Images/smallsm1.png';
import Small2 from '../../Images/sm2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-brands-svg-icons';


class Download extends Component {
    render () {
        return (
            <div className="download">
                 <Container>
                    <Row>
                        <Col className="col-md-6">
                            <img src={Big} className="img1"/>
                            <img src={Small1} className="img2"/>
                            <img src={Small2} className="img3"/>
                        </Col>
                        <Col className="col-md-6">
                            <h1>Download app to get recipes from Everywhere</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="apple">
                                <FontAwesomeIcon icon={icons.faApple}  className="myicon"/>
                                <h4>Available</h4>
                                <h6>on App Store</h6>
                            </div>
                            <div className="Android">
                                <FontAwesomeIcon icon={icons.faAndroid}  className="myicon2"/>
                                <h4>Download</h4>
                                <h6>From Play Store</h6>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Download;