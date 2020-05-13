import React from 'react';
import '../Styles/BlogStyles/blog.css';



const DataBlog = (props) => {
    return(
        <div className="datablog">
            <img src={`../${props.imgUrl}`} className="imgg1"/>
            <h1>{props.title}</h1>
            <p>{props.body}</p>
        </div>
    )
}
export default DataBlog;