import React ,{ Component }  from 'react';
import '../Styles/BlogStyles/blog.css';
import {
     Container ,Col,Row }
 from 'reactstrap';
import Img1 from '../../Images/boyy.png';
import Img2 from '../../Images/cam.png';
import Img3 from '../../Images/sho.png';
import Img4 from '../../Images/nug.png';
import Img5 from '../../Images/cof.png';
import DataBlog from './DataBlog';
import SecondCol from '../BlogComponents/SecondCol';
import FirstCol from './FirstCol';
import ThirdCol from './ThirdCol';
import Footer from '../FooterComponent/Footer';


class Blog extends Component{
    state = {
        dataRequest : [
            { 
                imgUrl:Img1,
                title:"Google inks pact for new 35-storey office",
                body:"That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
            },
            {
                imgUrl:Img2,
                title:"Google inks pact for new 35-storey office",
                body:"That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
            },
            {
                imgUrl:Img3,
                title:"Google inks pact for new 35-storey office",
                body:"That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
            },
            {
                imgUrl:Img4,
                title:"Google inks pact for new 35-storey office",
                body:"That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
            },
            {
                imgUrl:Img5,
                title:"Google inks pact for new 35-storey office",
                body:"That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
            }
        ]
    }
    render(){
        return(
            <div className="blog">
                <Container>
                <h1 className="blogg">Blog</h1>
                    <Row>
                        <Col className="col-md-8">
                            {this.state.dataRequest.map((el)=> {
                                return <DataBlog imgUrl={el.imgUrl}  title={el.title}  body={el.body}/>
                            })}
                        </Col>
                        <Col className="col-md-4">
                            <SecondCol/>
                            <FirstCol/>
                            <ThirdCol/>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </div>
        )
    }
}
export default Blog;