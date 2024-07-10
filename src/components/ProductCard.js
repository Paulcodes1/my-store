import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ id, image, title, price, rating }) => {
  return (
    <div className="card h-100">
      <Link to={`/product/${id}`} className="product-card-link">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-price">${price}</p>
          <div className="rating">
            {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
