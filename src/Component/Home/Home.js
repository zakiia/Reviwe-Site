import React from "react";
import "./Home.css";
import useReviews from "../../Hooks/useReviews";
import Review from "../Review/Review";

const Home = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div>
      <div className="home-container">
        <div className="img-container">
          <img src="/Image/laptop.jpg" alt="" />
        </div>
        <div className="text-container">
          <h1>
            Your Next Laptop <br />
            Your Best Laptop
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            deserunt odit consequuntur modi nesciunt ab aliquam nemo atque
            itaque qui. Nostrum eaque recusandae quo cum optio dolorem?
          </p>
          <button className="btn-review">View Reviews</button>
        </div>
      </div>
      <div className="review">
        <h1>Customer Review</h1>
        <div className="review-container">
          {reviews.slice(0, 3).map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </div>
        <button className="btn-review">See All Reviews</button>
      </div>
    </div>
  );
};

export default Home;
