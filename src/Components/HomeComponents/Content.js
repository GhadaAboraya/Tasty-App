import React , { Component } from 'react';
import '../Styles/HomeStyles/content.css';
import DataContent from '../HomeComponents/DataContent';
import Img1 from '../../Images/recpie1.png';
import Img2 from '../../Images/recpie2.png';
import Img3 from '../../Images/recpie3.png';
import {
    Container,
    Row,
} from 'reactstrap';


class Content extends Component {
    state = {
        dataRequest:[
            {
                imgUrl:Img1,
                title: "Egg Manchurian" ,
                head: "Appetizer",
                body: "Time Needs: 30 Mins",
                button: "View Full Recipe"
            },
            {
                imgUrl:Img2,
                title: "Egg Manchurian" ,
                head: "Appetizer",
                body: "Time Needs: 30 Mins",
                button: "View Full Recipe"
            },
            {
                imgUrl:Img3,
                title: "Egg Manchurian" ,
                head: "Appetizer",
                body: "Time Needs: 30 Mins",
                button: "View Full Recipe"
            }
        ]
    }
    render () {
        return(
            <div className="content">
                <Container>
                    <Row>
                        {this.state.dataRequest.map((ele)=> {
                            return<DataContent imgUrl={ele.imgUrl} title={ele.title}  head={ele.head}  body={ele.body}  button={ele.button}/>
                        })}
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Content;
