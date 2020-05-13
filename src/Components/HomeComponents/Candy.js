import React ,{ Component } from 'react';
import '../Styles/HomeStyles/candy.css';
import {
    Container,Row
}from 'reactstrap';
import Sweet from '../../Images/sweet.png';
import Sweet1 from '../../Images/sweet1.png';
import Sweet2 from '../../Images/sweet2.png';
import DataCandy from './DataCandy';


class Candy extends Component {
    state = {
        dataRequests : [
            {
                imgUrl:Sweet,
                title:"Birthday Catering",
                body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                imgUrl:Sweet1,
                title:"Birthday Catering",
                body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                imgUrl:Sweet2,
                title:"Birthday Catering",
                body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
        ]
    }
    render () {
        return (
            <div className="candy">
                <Container>
                    <Row>
                        {this.state.dataRequests.map((el) => {
                            return <DataCandy imgUrl={el.imgUrl}  title={el.title}   body={el.body} />
                        })}
                    </Row>
                </Container>
            </div>
        );
    }

}
export default Candy;