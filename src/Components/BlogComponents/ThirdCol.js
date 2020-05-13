import React from 'react';
import { 
    Input,Button
} from 'reactstrap';
import '../Styles/BlogStyles/blog.css';


const ThirdCol =()=>{
    return(
        <div className="thirdcol">
            <h5>Newsletter</h5>
            <Input className="search" type="email" name="email"  placeholder="Emaik" />
            <Button className="btnnn">Search</Button>
        </div>
    )
}
export default ThirdCol;