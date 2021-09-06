import React from 'react';
import { Link } from 'react-router-dom';
import './HomeCategory.css';


function HomeCategory(props) {
    const { image, name, description, route } = props;
    
    return(
        <div className="col-12 col-md-4 d-flex flex-column align-items-center mb-5 mt-2">
            <Link to={`/category/${route}`} className="d-flex flex-column align-items-center">
            <img src={image} alt="Product" className="hc-img"/>
            <h2 className="h2 mt-2">{name}</h2>
            <p className="h5 text-center">{description}</p>
            </Link>
        </div>
    )
}

export default HomeCategory;