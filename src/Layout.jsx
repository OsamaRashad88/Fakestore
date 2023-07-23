import React from "react";
import { Outlet } from "react-router-dom";
import Categories from "./Categories";
import Navbar from "./Navbar";
export default function Layout() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}
