import React, { useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 150, quantity: 0 },
    { id: 2, name: 'Iphone', price: 90, quantity: 0 },
    { id: 3, name: 'Headphone', price: 70, quantity: 0 },
  ]);

  const handleIncrement = (productId) => {
    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const handleDecrement = (productId) => {
    const updatedProducts = products.map(product => {
      if (product.id === productId && product.quantity > 0) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="categories">
            <select>
              <option value="">All</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
            </select>
          </div>
        </nav>
      </header>
      <div className="product-list">
        {products.map(product => (
          <div className="product-card" key={product.id}>
          <img src={`${process.env.PUBLIC_URL}/${product.name.toLowerCase()}.jpg`} alt={product.name} />
            <div className="product-info">
              <h2>{product.name}</h2>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <div className="quantity-controls">
                <button onClick={() => handleDecrement(product.id)}>-</button>
                <button onClick={() => handleIncrement(product.id)}>+</button>
              </div>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
