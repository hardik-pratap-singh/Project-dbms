import React from "react";
import Navbar from "./components/Navbar";
import FreshItems from './components/FreshItems';
import Heading from './components/Heading';
import Sell from './components/Sell';




function App() {
  return (
    <div>

      {/* <Router>
        <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        </Routes>
      </Router> */}
      <Navbar />
      <Sell />
      <Heading />
      <FreshItems />

    </div>
  );
}

export default App;
