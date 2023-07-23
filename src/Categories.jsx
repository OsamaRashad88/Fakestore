import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    try {
      let { data } = await axios(
        `https://fakestoreapi.com/products/categories`
      );
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="col-md-3">
      <Link to={`/`}>
        <button
          type="button"
          className="btn btn-outline-primary btn-block mb-2"
        >
          All
        </button>
      </Link>

      {categories.map((category) => (
        <Link to={`/categories/${category}`}>
          <button
            key={category}
            type="button"
            className="btn btn-outline-primary btn-block mb-2"
          >
            {category}
          </button>
        </Link>
      ))}
    </div>
  );
}
