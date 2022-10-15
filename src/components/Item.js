import React from "react";

function Item(props){
    return(
        <div>
            <div className="card my-3" style={{width: "18rem"}}>
                    <img src={props.imgUrl} className="card-img-top" alt="Not available" style={{height:"210px",width:"auto"}} />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.description}</p>
                            <a href="/" target="blank" className="btn btn-sm btn-dark ">Know More</a>
                        </div>
                </div>
        </div>
    );
}

export default Item;