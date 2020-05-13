import React from 'react';
import { 
    ListGroup, ListGroupItem 
} from 'reactstrap';
import '../Styles/BlogStyles/blog.css';


const FirstCol =()=>{
    return(
        <div className="firstcol">
            <h5>Recent Post</h5>
                <ListGroup>
                    <ListGroupItem className="listt">From life was you fish.</ListGroupItem>
                    <ListGroupItem className="listt">The Amazing Hubble</ListGroupItem>
                    <ListGroupItem className="listt">Astronomy Or Astrology</ListGroupItem>
                    <ListGroupItem className="listt">Asteroids telescope</ListGroupItem>
                </ListGroup>
        </div>
    )
}
export default FirstCol;