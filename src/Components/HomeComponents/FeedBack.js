import React , { Component } from 'react';
import {
    Container,Row
}from 'reactstrap';
import Team1 from '../../Images/team1.png';
import Team2 from '../../Images/team2.png';
import DataFeedBack from './DataFeedBack';
import '../Styles/HomeStyles/feedback.css';

class FeedBack extends Component {
    state = {
        dataReq : [
            { 
                imgUrl:Team1,
                title: "Adam Nesane",
                body: "CHIEF CUSTOMER",
                head: "You're had. Subdue grass Meat us winged years you'll doesn't. fruit two also won one yielding creepeth third give may never lie alternet food."
            },
            { 
                imgUrl:Team2,
                title: "Adam Nesane",
                body: "CHIEF CUSTOMER",
                head: "You're had. Subdue grass Meat us winged years you'll doesn't. fruit two also won one yielding creepeth third give may never lie alternet food."
            }
        ]
    }

   render () {
       return (
           <div className="feedback">
               <Container>
                    <h1>Feedback From Customers</h1>
                    <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women.</p>
                    <Row className="row">
                        {this.state.dataReq.map((ele) => {
                            return <DataFeedBack  imgUrl={ele.imgUrl}  title={ele.title}  body={ele.body}  head={ele.head}/>
                        })}
                    </Row>
                </Container>   
           </div>
       );
   }
}
export default FeedBack;