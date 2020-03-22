import React from 'react';
import { Link } from 'react-router-dom';


function HomeCategory(props) {
    const { image, name, description, route } = props;
    
    return(
        <div className="col-12 col-md-6">
            <Link to={`/category/${route}`}>
            <img src={image} alt="Product" className="w-100"/>
            <h2 className="h2">{name}</h2>
            <p className="h5">{description}</p>
            </Link>
        </div>
    )
}

export default HomeCategory;