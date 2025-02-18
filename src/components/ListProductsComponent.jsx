import React, { useEffect, useState } from 'react';
import { listProductsLocal } from '../../services/ProductService';

function ListProductsComponent() {
  const [products, setProducts] = useState([]); // State to store products

  useEffect(() => {
    listProductsLocal()
    .then((response) => {
      setProducts(response.data);
    }).catch(error => console.error(error));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4"> {/* 3 products per row */}
            <div className="card" style={{ width: "18rem" }}>
              <img src={product.imageUrls} className="card-img-top" alt={product.productName} />
              <div className="card-body">
                <h5 className="card-title">{product.productName}</h5>
                <p className="card-text">${product.productPrice}</p>
                <a href={`/products/${product.productId}`} className="btn btn-primary">View Product</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListProductsComponent;