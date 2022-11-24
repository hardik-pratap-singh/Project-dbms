// import '../styles/Description.css'
import React, { useState, useEffect } from 'react';

function Description(props) {

	// useEffect(() => {
	// 			fetch('http://localhost:8080/hardik')
	// 			.then(response => response.json())
	// 			.then(data => console.log(data));
	// 	}, [])

	useEffect(() => {
		// 👇️ this only runs once
		// console.log('useEffect ran');
	
		// 👇️ fetch data from remote API
		async function getUsers() {
		  try {
			const response = await fetch('http://localhost:8080/hardik', {
			  method: 'GET',
			  headers: {
				Accept: 'application/json',
			  },
			});
	
			if (!response.ok) {
			  throw new Error(`Error! status: ${response.status}`);
			}
	
			const result = await response.json();
	
			// console.log('result is: ', JSON.stringify(result, null, 4));
			console.log(result);
	
			// setData(result);
		  } catch (err) {
			// setErr(err.message);
			console.log("error") ; 
		  }
		}
	
		getUsers();
	  }, []);


  return (
    <div>
      <div className="total">

        <div className="img">
          <img src='' alt="" />
        </div>
        <div className="rightform">
          <h3>{props.title}</h3>
          <h3>{props.description}</h3>
          <h3>Price</h3>
          <h3>Category</h3>
          <div className="sellerdesc">
            Seller Description here
          </div>

        </div>

      </div>
    </div>
  )
}

export default Description 
