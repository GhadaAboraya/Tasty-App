import React from 'react';
import '../Styles/FooterStyles/footer.css';
import {
    Container,
    Row,
    Col,
    Button, Form,Input, FormGroup
} from 'reactstrap';
import List from './List';
import List2 from './List2';
import List3 from './List3';
import List4 from './List4';


const Footer = () => {
    return(
        <div className="footer">
            <Container>
                <Row className="row">
                    <Col className="col-md-2 col-xs-12">
                        <h1>Top Products</h1>
                        <List/>
                    </Col>
                    <Col className="col-md-2 col-xs-12">
                        <h1>Quick Links</h1>
                        <List2/>
                    </Col>
                    <Col className="col-md-2 col-xs-12">
                        <h1>Features</h1>
                        <List3/>
                    </Col>
                    <Col className="col-md-2 col-xs-12">
                        <h1>Resources</h1>
                        <List4/>
                    </Col>
                    <Col className="col-md-4 col-xs-12">
                        <h1>Subscribe</h1>
                        <p>You can trust us. we only send promo offers,</p>
                        <Form inline>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Input type="email" name="email" id="exampleEmail" placeholder="Enter your Email" />
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                    </Col>
                </Row>
                <h6>Copyright ©2019 All rights reserved | This template is made with  by Colorlib</h6>
            </Container>
        </div>
    );
}
export default Footer;