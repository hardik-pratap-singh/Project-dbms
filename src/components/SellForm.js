import React from "react";
import "../styles/login.css";
// import $ from 'jquery'; 
// import Signup from "./Signup";



function SellForm() {
  return (
    <><div className="sf">
      
      <div className="mainhead">
        <div className="header">
          <h1>Sell Here</h1>
        </div>
        <div className="login-page">
          <div className="form">
            <form method="post" action="../../backend/additem">
                <input type="text" name="itemname" placeholder="Item Name" required />
                <br />
                <br />
                <input type="descp" name="desc" placeholder="Item Description" required />
                <br />
                <br />
                <input type="price" name="price" placeholder="Expected Price" required />
                <br />
                <br />
                <select name="category" id="cat" placeholder="Category">
                  <option value="Electronics">Electronics</option>
                  <option value="Stationary">Stationary</option>
                  <option value="Locomotives">Locomotives</option>
                  <option value="Books">Books</option>
                  <option value="other">other</option>
                </select>
                <br />
                <br />
                <center><br />
                <span className="cfile">Choose An Image file for upload : </span>
                <input type="file" name="image" accept="image/png, image/jpeg" required />
                </center>
                
                <br />
                <br />
                <input id="btn" type="submit" value="Submit" />
                <br />
                

            </form>
          </div>
        </div>
      </div>
      </div> 
    </>
  );
}



export default SellForm;
