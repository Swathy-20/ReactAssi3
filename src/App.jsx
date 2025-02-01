import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductCard from "./components/ProductCard";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <Router basename="/ReactAssi3">
      <div>
        {}
        <header className="navbar">
          <h1>Products</h1>
        </header>

        {}
        <Routes>
          {}
          <Route
            path="/"
            element={
              <div className="product-list">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id} 
                    title={product.title}
                    image={product.image}
                    price={`$${product.price}`}
                    description={product.description}
                  />
                ))}
              </div>
            }
          />

          {}
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
