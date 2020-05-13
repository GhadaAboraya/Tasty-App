import React from 'react';
import {
    Col
}from 'reactstrap';
import '../Styles/HomeStyles/candy.css';

const DataCandy = (props) => {
    return (
        <div className="datacandy">
            <Col>
                <img src={`../${props.imgUrl}`}  className="myimg"/>
                <h1>{props.title}</h1>
                <p>{props.body}</p>
            </Col>
        </div>
    );
}
export default DataCandy;