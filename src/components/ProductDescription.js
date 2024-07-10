import React from 'react';
import { useParams } from 'react-router-dom';
import { newArrivals, categories } from './ProductList';
import './ProductDescription.css';

const ProductDescription = () => {
  const { id } = useParams();
  const allProducts = [...newArrivals, ...categories.female, ...categories.male, ...categories.kids];
  const product = allProducts.find(item => item.id === parseInt(id));

  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <div className="product-description-page">
      <div className="product-description">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-details">
          <h2>{product.title}</h2>
          <p>{product.price}</p>
          <div className="rating">
            {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
          </div>
          <div className="details">
            <h3>Details</h3>
            <p>{product.description}</p>
          </div>
          <div className="options">
            <h3>Size:</h3>
            <p>S M L XL</p>
            <h3>Colors Available:</h3>
            <div className="colors">
              <div className="color" style={{ backgroundColor: 'grey' }}></div>
              <div className="color" style={{ backgroundColor: 'blue' }}></div>
              <div className="color" style={{ backgroundColor: 'red' }}></div>
              <div className="color" style={{ backgroundColor: 'black' }}></div>
            </div>
          </div>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
