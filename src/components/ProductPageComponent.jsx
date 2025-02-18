import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/ProductService";

function ProductPageComponent() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // Active image

  useEffect(() => {
    getProductById(id)
      .then((response) => {
        setProduct(response.data);
        setSelectedImage(response.data.imageUrls?.[0]); // Set first image
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container product-page">
      {/* Left Side: Product Images */}
      <div className="product-images">
        <div className="main-image">
          <img src={selectedImage} alt={product.productName} />
        </div>
        <div className="thumbnail-gallery">
          {product.imageUrls.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Preview ${index}`}
              className={img === selectedImage ? "active" : ""}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Right Side: Product Info */}
      <div className="product-info">
        <h1>{product.productName}</h1>
        <p className="price">€{product.productPrice}</p>
        <p>{product.description}</p>

        {/* Size Selection */}
        <div className="size-selection">
          <label>Select Size:</label>
          <select>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
          </select>
        </div>

        {/* Add to Cart Button */}
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductPageComponent;