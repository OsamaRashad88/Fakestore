import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Categories from "./Categories";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Somecategory() {
  let { category } = useParams();
  const [categoryproducts, setcategoryproducts] = useState([]);
  async function getcategoryproducts(category) {
    let { data } = await axios(
      `https://fakestoreapi.com/products/category/${category}`
    );
    console.log(data);
    setcategoryproducts(data);
  }

  useEffect(() => {
    getcategoryproducts(category);
  }, [category]);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Categories />
          <div className=" row col-md-9 gx-3 gy-3">
            {categoryproducts.map((category) => (
              <div className="col-md-4" key={category.id}>
                <Link to={`/${category.id}`}>
                  <div className="product-details">
                    <img src={category.image} className="w-100 pro-img" />
                    <p>{category.title}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
