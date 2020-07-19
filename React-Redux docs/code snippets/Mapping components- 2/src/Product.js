import React from 'react'

function Product(props){
    return(
        <div>
        <h3>name: {props.product.name}</h3>
        <p>ExpDate: {props.product.expDate}</p>
        </div>
        )
}

export default Product