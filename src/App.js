import React from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Description from "./components/View";
import SellForm from "./components/SellForm";
import FreshItems from "./components/FreshItems";
import View from "./components/View";
// import Logout from "./components/Logout";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          {/* <Route path="/Logout" element={<Logout />} /> */}
          {/* <Route path="/Logout" element={<Login />} /> */}
          <Route path="/Signup" element={<Signup />} />
          <Route path="/View" element={<View />} />
          <Route path="/Sell" element={<SellForm />} />
          {/* <Route path = "/hardik123" element = {<FreshItems />} />  */}
          {/* <Route path="/hardik123" element={<Test />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
