import React from 'react';
import '../Styles/AboutStyles/about.css';
import Headerr from './Headerr';
import Watched from '../HomeComponents/Watched';
import Download from '../HomeComponents/Download';
import Banner from '../HomeComponents/Banner';
import FeedBack from '../HomeComponents/FeedBack';
import Footer from '../FooterComponent/Footer';


const About =() => {
    return(
        <div className="about">
            <h1 className="abb">About Us</h1>
            <Headerr/>
            <Watched/>
            <Download/>
            <Banner/>
            <FeedBack/>
            <Footer/>
        </div>
    )
}
export default About;