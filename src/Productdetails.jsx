import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Productdetails() {
  const [productdetails, setProductdetails] = useState([]);

  let { id } = useParams();

  async function getproductdetails(id) {
    try {
      let { data } = await axios(`https://fakestoreapi.com/products/${id}`);
      console.log(data);
      setProductdetails(data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  }

  useEffect(() => {
    getproductdetails(id);
  }, [id]);

  return (
    <div className="container mt-5">
      <div className="row w-75">
        <div className="col-md-4">
          <img
            src={productdetails.image}
            className="w-100 rounded"
            alt={productdetails.title}
          />
        </div>
        <div className="col-md-8">
          <h2 className="mb-3" style={{ color: "#007bff" }}>
            {productdetails.title}
          </h2>
          <p className="lead mb-4">
            <strong style={{ color: "#28a745" }}>Category:</strong>{" "}
            {productdetails.category}
          </p>
          <p className="h5" style={{ color: "#dc3545" }}>
            Price: {productdetails.price} USD
          </p>
          <p className="mt-4">
            <strong style={{ color: "#ffc107" }}>Rating:</strong>{" "}
            {productdetails.rating?.rate} ({productdetails.rating?.count}{" "}
            reviews)
          </p>
          <hr />
          <p>
            <strong>Description:</strong> {productdetails.description}
          </p>
          <p>
            <strong>Available Stock:</strong>
          </p>
          <p>{productdetails.count}</p>
        </div>
      </div>
    </div>
  );
}
