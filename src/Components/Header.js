import React, { useState, useEffect } from "react";
import Product from "./product";
import './Header.css';

function Header() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();
        console.log(data)
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  const filteredProducts = products.filter((item) => item.category === "men's clothing" || item.category === "electronics"
  );


  return (
    <div className="header-container">
      <div className="product-grid">
        {filteredProducts.map((item) => (
          <Product data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Header;
