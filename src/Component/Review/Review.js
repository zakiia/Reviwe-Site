import React from "react";
import "./Review.css";

const Review = (props) => {
  const { name, comment, ratings } = props.review;

  return (
    <div className="reviews">
      <h4>Name: {name}</h4>
      <p>Comment: {comment}</p>
      <p>Ratings: {ratings} Star</p>
    </div>
  );
};

export default Review;
