import React from 'react';
import '../Styles/RecipesStyles/recipes.css';
import Content from '../HomeComponents/Content';
import Banner from '../HomeComponents/Banner';
import Download from '../HomeComponents/Download';
import Footer from '../FooterComponent/Footer';
import { Container } from 'reactstrap';


const Recipes =() => {
    return(
        <div className="resipes">
           <Container>
                <h1 className="rec">Chicken Recipes</h1>
           </Container>
            <Content/>
            <Banner/>
            <Download/>
            <Footer/>
        </div>
    )
}
export default Recipes;