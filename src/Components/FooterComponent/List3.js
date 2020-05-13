import React from 'react';
import {
    ListGroup,
    ListGroupItem,
} from 'reactstrap';
import '../Styles/FooterStyles/footer.css';

const List3 = () => {
    return (
        <div className="list">
            <ListGroup className="list">
                <ListGroupItem  tag ="a" href="#" className="items">Jobs</ListGroupItem>
                <ListGroupItem  tag ="a" href="#" className="items">Brand Assets</ListGroupItem>
                <ListGroupItem  tag ="a" href="#" className="items">Investor Relations</ListGroupItem>
                <ListGroupItem  tag ="a" href="#" className="items">Terms of Service</ListGroupItem>
            </ListGroup>
        </div>
    );
}
export default List3;