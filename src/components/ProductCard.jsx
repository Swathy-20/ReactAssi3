import React from "react";
import { Link } from "react-router-dom"; 
import "../styles/ProductCard.css";

const ProductCard = ({ id, title, image, price, description }) => {
  const truncatedDescription =
    description.length > 50 ? description.slice(0, 50) + "..." : description;

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-price">{price}</p>
      <p className="product-description">{truncatedDescription}</p>
      
      <Link to={`/product/${id}`} className="view-button">
        View
      </Link>
      <Link to={``} className="cart-button">
        Add to Cart
      </Link>
      
    </div>
  );
};

export default ProductCard;
