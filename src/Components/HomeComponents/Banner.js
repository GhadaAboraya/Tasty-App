import React from 'react';
import '../Styles/HomeStyles/banner.css';
import { Link } from "react-router-dom";
import {Button,Container } from 'reactstrap';

function Banner () {
    return (
        <div className="banner"> 
            <Container>
                <h3>THOUSANDS OF RECIPES ARE WAITING TO BE WATCHED</h3>
                <h1>Discover latest trending recipes</h1>
                <div className="button">
                    <Button className="mybtn">
                        <Link to="/recipes" className="mylink">View Full Recipe</Link>
                    </Button>
                </div>
            </Container>
        </div>
    )
}
export default Banner;