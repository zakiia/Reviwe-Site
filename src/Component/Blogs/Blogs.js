import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blog">
      <h2>1. What is the purpose of context API</h2>
      <p>
        Context API is used to pass global variables anywhere in the code. It
        helps when there is a need for sharing state between a lot of nested
        components. It is light in weight and easier to use, to create a context
        just need to call React
      </p>
      <h2>2. What is semantic tag?</h2>
      <p>
        A semantic element clearly describes its meaning to both the browser and
        the developer. Examples of non-semantic elements:- div and span.
      </p>
    </div>
  );
};

export default Blogs;
