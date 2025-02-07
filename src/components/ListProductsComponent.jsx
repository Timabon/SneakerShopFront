import React, { useEffect, useState } from 'react';

function ListProductsComponent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://sneakershopback.onrender.com/api/v1/products/all")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product) => (
          <div key={product.productId} className="col-md-4"> {/* 3 products per row */}
            <div className="card" style={{ width: "18rem" }}>
              <img src={product.imageUrls[0]} className="card-img-top" alt={product.productName} />
              <div className="card-body">
                <h5 className="card-title">{product.productName}</h5>
                <p className="card-text">${product.productPrice}</p>
                <a href={`/product/${product.productId}`} className="btn btn-primary">View Product</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListProductsComponent;