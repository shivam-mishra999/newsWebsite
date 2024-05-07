import React from 'react';
import newsDefaultImage from "./news_default.jpg";

export default function NewsItem({title, description, src, url, date}) {
 
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 py-2 px-2" style={{maxWidth: "345px"}}>
        <img src={src?src:newsDefaultImage} style={{height:"200px", width:"320px"}} className="card-img-top" alt="..." />
        <p>{date}</p>
        <div className="card-body">
            <h5 className="card-title">{title.slice(0, 50)}</h5>
            <p className="card-text">{description ? description.slice(0, 90) : "News refers to information about current events happening around the globe and even outside."}</p>
            <a href={url} className="btn btn-primary">Read More</a>
        </div>
    </div>
  )
}
