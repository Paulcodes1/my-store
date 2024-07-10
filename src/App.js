import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductsPage from './components/ProductsPage';
import ProductDescription from './components/ProductDescription';
import CartPage from './components/CartPage';
import Layout from './components/Layout';
import { CartProvider } from './components/CartContext';

const App = () => (
  <Router>
    <CartProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDescription />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Layout>
    </CartProvider>
  </Router>
);

export default App;
