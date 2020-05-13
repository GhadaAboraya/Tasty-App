import React from 'react';
import {
    Container
}from 'reactstrap';
import '../Styles/AboutStyles/headerr.css';

const Headerr = () => {
    return (
        <div className="headerr">
            <Container>
                <h2 className="name">Recipe videos that never <br/> misses any portion</h2>
                <p className="par">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </Container>
        </div>
    );
}
export default Headerr;