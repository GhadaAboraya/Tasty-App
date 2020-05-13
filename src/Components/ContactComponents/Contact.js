import React from 'react';
import '../Styles/ContactStyles/contact.css';
import {
    Row,Col,Input, Container,Button
}from 'reactstrap';
import Footer from '../FooterComponent/Footer';

const Contact =() => {
    return(
        <div className="contact">
            <h1 className="con">Contact Us</h1>
            <Container>
            <Row className="row">
                <Col className="col-md-8">
                    <h3>Get in Touch</h3>
                    <Input type="textarea" placeholder="Enter Message" name="text" className="area" />
                    <Input type="email" name="email" className="passs" placeholder="Enter Email" />
                    <Input type="password" name="password" className="passs" placeholder="Enter Password" />
                    <Button className="bb">Send Message</Button>
                </Col>
                <Col className="col-md-4">
                </Col>
            </Row>
            </Container>
            <Footer/>
        </div>
    )
}
export default Contact;