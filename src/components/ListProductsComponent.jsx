import React, { useEffect, useState } from 'react';
import { listProducts } from '../../services/ProductService';

function ListProductsComponent() {
  const [products, setProducts] = useState([]); // State to store products

  useEffect(() => {
    listProducts()
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4"> {/* 3 products per row */}
            <div className="card" style={{ width: "18rem" }}>
              <img src={product.imageUrl} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <a href={`/product/${product.id}`} className="btn btn-primary">View Product</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListProductsComponent;