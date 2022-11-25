// import '../styles/Description.css'
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/View.css'

function View(props) {
	const location = useLocation();
	const data = location.state?.data;
	return (
		<div>
			<div className="total">
				<div className="leftbox">
					<img src={data.img}  alt="Not available" />
				</div>
				<div className="rightbox">
					<div className="details">
						<h3>{data ? data.title : "Data Not available"}</h3>
						<h6>{data ? `₹`+ data.price  : "Data Not available"}</h6>
						<h6>{data ? data.desc : "Data Not available"}</h6>
					</div>
					<div className="sellerdesc">
						<h4>Seller Description here</h4>
						<h6>Name : {data? data.sname: "Data not available"}</h6> 
						<h6>Contact Number : {data?data.phone:"Data not available"}</h6>
						<h6>Email : {data? data.email:"Data not available"}</h6> 
					</div>
						<form action="../../backend/buyitem" method="post">
							<button type="submit" className="btn btn-dark">Buy Now!</button>
						</form>
					<div>

					</div>
				</div>
			</div>
		</div>
	)
}

export default View 
