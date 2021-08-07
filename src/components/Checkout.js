import React from 'react';
import './Checkout.css';
import {useStateValue} from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import checkout_image from './images/checkout_image.png';
import Subtotal from "./Subtotal";

function Checkout(){
    const [{basket}, dispatch]=useStateValue();

    return (
        <div className={"checkout"}>
            <div>
            <img src={checkout_image}
                 className={"checkout__image"}
                 alt={""}/>
            {
                basket?.length===0?(
                    <div>
                        <h2>Your shopping cart is empty</h2>
                        <p>You have no item in your basket. To buy one click on "Add to basket" </p>
                    </div>
                ):(
                    <div>
                        <h2 className={"checkout__title"}>Basket</h2>
                        {
                            basket.map(item=>{
                                return (
                                    <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    rating={item.rating}
                                    price={item.price}
                                    />
                                )
                            })
                        }
                    </div>
                )
            }
            </div>
            {
                basket?.length>0&&(
                    <div className={"checkout__subtotal"}>
                        <Subtotal />
                    </div>
                )
            }

        </div>
    )
}

export default Checkout;