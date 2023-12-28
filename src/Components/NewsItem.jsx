import React from 'react';
import image from '../assets/news.jpg';

const NewsItem = ({ title, description, src, url }) => {
  // Vérifiez si title, description et url sont définis
  if (!title || !description || !url ||title === "[Removed]") {
    return null; // Ne rend rien si une de ces propriétés est manquante
  }

  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
      <img src={src ? src : image} style={{ height: "200px", width: "325px" }} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique molestie vulputate. Duis "}</p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
};

export default NewsItem;