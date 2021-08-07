import React from 'react';
import './CheckoutProduct.css'
import {useStateValue} from '../StateProvider';

function CheckoutProduct({id, rating, image, price, title}){

    const [{basket}, dispatch]=useStateValue();

    let array=new Array();
    let start=1;
    while(start<=rating){
        array.push("⭐");
        start++;
    }

    const removeFromBasket=function(){
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id
        })
    }

    return (
        <div className={"checkoutProduct"}>
            <img src={image} alt={""}/>
            <div className={"checkoutProduct__info"}>
                <p className={"checkoutProduct__title"}>{title}</p>
                <p className={"checkoutProduct__price"}>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p>{array}</p>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct;