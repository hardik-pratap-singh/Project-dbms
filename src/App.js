import React from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FreshItems from './components/FreshItems';
import Heading from './components/Heading';
import Sell from './components/Sell';


function App() {
  return (
      <Router>
    <div>
        <Navbar />
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      <Sell />
      <Heading/>
      <FreshItems/>
    </div>
      </Router>
  );
}

export default App;
