import React from 'react';
import {
    Row,Col,Container
} from 'reactstrap';
import Food from '../../Images/Food.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-brands-svg-icons';


const Tiger = () => {
    return(
        <div className="tiger">
            <Container >
                <Row className="row">
                    <Col className="col-md-6">
                        <img src={Food}/>
                    </Col>
                    <Col className="col-md-6">
                        <h2 className="tt">Dragon tiger phoenix</h2>
                        <p className="pp">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                        <Row className="roww">
                            <Col className="col-md-2">
                                <FontAwesomeIcon icon={icons.faFacebook}  className="iconn"/>
                            </Col>
                            <Col className="col-md-2">
                                <FontAwesomeIcon icon={icons.faTwitter}  className="iconn"/>
                            </Col>
                            <Col className="col-md-2">
                                <FontAwesomeIcon icon={icons.faInstagram}  className="iconn"/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Tiger;