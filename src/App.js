import React from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Description from "./components/Description";
import SellForm from "./components/SellForm";
import Test from "./components/Test";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/View" element={<Description />} />
          <Route path="/Sell" element={<SellForm />} />
          <Route path="/hardik123" element={<Test />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
