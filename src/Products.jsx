import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      let { data } = await axios(`https://fakestoreapi.com/products`);
      console.log(data);
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="row col-md-9 gx-3 gy-3">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <Link to={`/${product.id}`}>
              <div className="product-details">
                <img src={product.image} className="w-100 pro-img" alt={product.title} />
                <p className="product-title">{product.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
