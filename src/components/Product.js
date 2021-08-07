import { keys } from '@material-ui/core/styles/createBreakpoints'
import React from 'react'
import './Product.css'
import {useStateValue} from '../StateProvider';

function Product({id, image, title, price, rating}) {

    const [{basket}, dispatch]=useStateValue();

    let array=new Array();
    let start=1;
    while(start<=rating){
        array.push("⭐");
        start++;
    }

    const addToBasket=()=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            },
        })
    }

    return (
        <div className="product">
            <div className="product__info">
            <p>{title}</p>
            <div className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </div>
            <div className="product__rating">
               <p>{array}</p>
            </div>
            </div>

            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
