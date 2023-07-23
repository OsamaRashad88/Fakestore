import React from "react";
import { createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Layout from "./Layout";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { RouterProvider } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import About from "./About";
import Contacts from "./Contacts";
import Productdetails from "./Productdetails";
import Somecategory from "./Somecategory";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/About", element: <About /> },
      { path: "/Contact", element: <Contacts /> },
      { path: "/:id", element: <Productdetails /> },
      { path: "/categories/:category", element: <Somecategory /> },
    ],
  },
]);
export default function App() {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}
