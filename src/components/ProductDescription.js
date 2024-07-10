import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { newArrivals, categories } from './ProductList';
import { useCart } from './CartContext';
import './ProductDescription.css';

const ProductDescription = () => {
  const { id } = useParams();
  const allProducts = [...newArrivals, ...categories.female, ...categories.male, ...categories.kids];
  const product = allProducts.find(item => item.id === parseInt(id));

  const { dispatch } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  if (!product) {
    return <div>No product found</div>;
  }

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...product, selectedSize, selectedColor, quantity: 1 },
    });
  };

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
            <div>
              {['S', 'M', 'L', 'XL'].map(size => (
                <button
                  key={size}
                  className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <h3>Colors Available:</h3>
            <div className="colors">
              {['grey', 'blue', 'red', 'black'].map(color => (
                <div
                  key={color}
                  className={`color ${selectedColor === color ? 'selected' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                ></div>
              ))}
            </div>
          </div>
          <button btn btn-primary onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
