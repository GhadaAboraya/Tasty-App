import React from 'react';
import {
    ListGroup,
    ListGroupItem,
} from 'reactstrap';
import '../Styles/FooterStyles/footer.css';

const List = () => {
    return (
        <div className="list">
            <ListGroup className="list">
                <ListGroupItem  tag ="a" href="#" className="items">Managed Website</ListGroupItem>
                <ListGroupItem  tag ="a" href="#" className="items">Manage Reputation</ListGroupItem>
                <ListGroupItem  tag ="a" href="#" className="items">Power Tools</ListGroupItem>
                <ListGroupItem  tag ="a" href="#" className="items">Marketing Service</ListGroupItem>
            </ListGroup>
        </div>
    );
}
export default List;