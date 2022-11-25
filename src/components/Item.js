import React from "react";
import { Link } from "react-router-dom";
// import View from "./View";


function Item(props) {
    let img = props.imgUrl.toString("base64");
    let title = props.title
    let price = props.price
    let desc = props.desc
    let sname=props.sname
    let email=props.email
    let phone=props.phone

    let data = { img : img , title: title, price: price, desc: desc, sname: sname, email: email, phone: phone}

    return (
        <>
            {/* <View img = {img} title = {title} price = {price} desc = {desc} /> */}
            <div className="card my-3" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt={props.imgUrl.toString()} style={{ height: "210px", width: "auto" }} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">₹ {price}</p>
                    <p className="card-text">{desc}</p>
                    {/* <Link to="/View" className="btn btn-sm btn-dark">Know More</Link> */}

                    {/* <Link to={{
                        pathname: '/View',
                        state :  , 
                    }} >Know More</Link> */}

                    <Link to = "/View"  className="btn btn-sm btn-dark" state = {{ data : data }} >Know More</Link>
                </div>
            </div>
        </>
    );
}

export default Item;