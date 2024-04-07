import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Review from "./Component/Review/Review";
import DashBoard from "./Component/DashBoard/DashBoard";
import Blogs from "./Component/Blogs/Blogs";
import About from "./Component/About/About";
import NotFound from "./Component/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="/dashboard" element={<DashBoard></DashBoard>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
