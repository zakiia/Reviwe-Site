import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-container">
        <h1>Text Container</h1>
      </div>
      <div className="img-container">
        <img src="/Image/laptop.jpg" alt="" />
      </div>
    </div>
  );
};

export default Home;
