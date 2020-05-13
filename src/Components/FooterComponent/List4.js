import React from 'react';
import {
    ListGroup,
    ListGroupItem,
} from 'reactstrap';
import '../Styles/FooterStyles/footer.css';

const List4 = () => {
    return (
        <div className="list">
            <ListGroup className="list">
                <ListGroupItem  tag ="a" href="#" className="items">Guides</ListGroupItem>
                <ListGroupItem  tag ="a" href="#" className="items">Research</ListGroupItem>
                <ListGroupItem  tag ="a" href="#" className="items">Experts</ListGroupItem>
                <ListGroupItem  tag ="a" href="#" className="items">Agencies</ListGroupItem>
            </ListGroup>
        </div>
    );
}
export default List4;