import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div className="header">
      <nav className="nav">
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/reviews">Review</CustomLink>
        <CustomLink to="/dashboard">DashBoard</CustomLink>
        <CustomLink to="/blogs"> Blogs</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </nav>
    </div>
  );
};

export default Header;
