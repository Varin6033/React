import React from "react";

function Product(props){
    return(
        <div>
            <h3 style={{color:"red"}}>Name: {props.product.name}</h3>
            <p>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD"})}
                - {props.product.description}</p>
            <hr/>
        </div>
    )
}

export default Product