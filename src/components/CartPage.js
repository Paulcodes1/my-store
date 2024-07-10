import React, { useContext } from 'react';
import { useCart } from './CartContext';
import deleteIcon from '../assets/images/deleteIcon.png'; // Adjust the path as needed
import './CartPage.css';

const CartPage = () => {
  const { cart, dispatch } = useCart();

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, quantity },
    });
  };

  const handleRemove = (id) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { id },
    });
  };

  const total = cart.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0);

  return (
    <div className="container cart-page">
      <h2 className="text-center">Cart Summary</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item row mb-4">
            <div className="col-md-3 col-6">
              <img src={item.image} alt={item.title} className="img-fluid" />
            </div>
            <div className="col-md-6 col-6">
              <h4>{item.title}</h4>
              <p>${Number(item.price).toFixed(2)}</p>
              <p>Size: {item.selectedSize}</p>
              <p>
                Color: <span className="color-box" style={{ backgroundColor: item.selectedColor }}></span>
              </p>
              <div className="quantity-controls">
                <button className="btn btn-outline-secondary btn-sm" onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                <span className="mx-2">{item.quantity}</span>
                <button className="btn btn-outline-secondary btn-sm" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
              </div>
            </div>
            <div className="col-md-3 col-12 mt-2 mt-md-0">
              <img 
                src={deleteIcon} 
                alt="Delete" 
                className="delete-icon" 
                onClick={() => handleRemove(item.id)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <p>Total: ${total.toFixed(2)}</p>
        <p>Shipping fee: $0.0</p>
        <p>Grand Total: ${total.toFixed(2)}</p>
        <button className="btn btn-primary checkout-button">Check Out</button>
      </div>
    </div>
  );
};

export default CartPage;
