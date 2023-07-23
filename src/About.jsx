import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className=" container mx-auto  w-75">
        <h3>
          Hello, My name is Osama Rashad (front end developer) This Web App is
          made with bootstrap , React.js,axios and fakestore,
        </h3>
        <i class="fa-brands fa-github fa-lg"></i>
        <Link to="https://github.com/OsamaRashad88">my github</Link>
      </div>
    </>
  );
}
