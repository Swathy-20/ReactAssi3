import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../styles/ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    
      <div className="product-detail">
        <img src={product.image} alt={product.title} className="product-image" />
        <h2 className="product-title">{product.title}</h2>
        <p className="product-category"><strong>Category:</strong> {product.category}</p>
        <p className="product-price"><strong>Price:</strong> ${product.price}</p>
        <p className="product-rating">
          <strong>Rating:</strong> {product.rating.rate} / 5 ({product.rating.count} reviews)
        </p>
        <p className="product-count">
        <strong>Count:</strong>  {product.rating.count}  
      </p>
        <p className="product-description">{product.description}</p>
        <Link to="/" className="back-button"> Back to Products</Link>
      </div>
    );
};

export default ProductDetail;
