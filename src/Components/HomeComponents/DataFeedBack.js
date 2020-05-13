import React from 'react';
import {
    Col
}from 'reactstrap';
import '../Styles/HomeStyles/feedback.css';

const DataFeedBack = (props) => {
    return(
        <div className="datafeedback">
            <Col className="col">
                <img src={`../${props.imgUrl}`} className="photo"/>
                <h3>{props.title}</h3>
                <h4>{props.body}</h4>
                <h6>{props.head}</h6>
            </Col>
        </div>
    );
}
export default DataFeedBack;