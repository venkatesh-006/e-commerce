import React from "react";
import { Link } from "react-router-dom";
import './Product.css';

function Product({ data }) {
    return (
        <div className="product-card">
            <div className="product-image-container">
                <div className="product-image-wrapper">
                    <img src={data.image} alt={data.title} className="product-image"/>
                </div>
            </div>

            <div className="product-info">
                <p className="product-category">{data.category}</p>
                <Link to={`/product/${data.id}`} className="product-title">
                    {data.title}
                </Link>
                <p className="product-price">${data.price}</p>
            </div>
        </div>
    );
}

export default Product;
