import React from 'react';
import '../Styles/HomeStyles/home.css';
import {
    Container
} from 'reactstrap';
import Content from './Content';
import Watched from './Watched';
import Candy from './Candy';
import Banner from './Banner';
import FeedBack from './FeedBack';
import Download from './Download';
import Footer from '../FooterComponent/Footer';

const Home =() => {
    return(
        <div className="home">
            <div className="header">
                <Container>
                    <h1>Chicken Dish With Per Boiled Egg</h1>
                </Container>
            </div>
            <Content/>
            <Watched/>
            <Candy/>
            <Banner/>
            <FeedBack/>
            <Download/>
            <Footer/>
        </div>
        
    );
}
export default Home;