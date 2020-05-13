import React from 'react';
import { 
    Input,Button,ListGroup, ListGroupItem 
} from 'reactstrap';
import '../Styles/BlogStyles/blog.css';


const SecondCol =()=>{
    return(
        <div className="secndcol">
            <Input className="search" type="password" placeholder="Search Keyword" />
                <Button className="btnnn">Search</Button>
                <h5>Category</h5>
                <ListGroup>
                    <ListGroupItem className="listt">Resaurant food</ListGroupItem>
                    <ListGroupItem className="listt">Travel News</ListGroupItem>
                    <ListGroupItem className="listt">Modern Technology</ListGroupItem>
                    <ListGroupItem className="listt">Product</ListGroupItem>
                    <ListGroupItem className="listt">Inspiration</ListGroupItem>
                </ListGroup>
        </div>
    )
}
export default SecondCol;