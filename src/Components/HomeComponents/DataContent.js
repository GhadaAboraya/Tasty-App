import React from 'react';
import '../Styles/HomeStyles/content.css';
import { Link } from "react-router-dom";
import{
    Col,
    Button
} from 'reactstrap';


const DataContent =(props) => {
    return(
        <div className="dataContent">
            <Col>
                <img src={`../${props.imgUrl}`} className="img"/>
                <h2>{props.title}</h2>
                <p>{props.head}</p>
                <h3>{props.body}</h3>
                <Button className="mybtn">
                    <Link to="/recipes">
                        <h5>View Full Recipe</h5>
                    </Link>
                </Button>
            </Col>
        </div>
    );
}
export default DataContent;