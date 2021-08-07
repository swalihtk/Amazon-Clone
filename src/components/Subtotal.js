import React from 'react';
import './Subtotal.css';
import {useStateValue} from "../StateProvider";
import CurrencyFormatter from 'react-currency-format';
import {getTotalBasketPrice} from "../reducer";

function Subtotal(){
    const [{basket}, dispatch]=useStateValue();

    return (
        <div className={"subtotal"}>
            {/* Price */}
            <CurrencyFormatter
                renderText={(value)=>(
                    <>
                    <p>
                        subtotal ({basket.length} items):<strong>{value}</strong>
                    </p>
                        <small className={"subtotal__gift"}>
                            <input type={"checkbox"}/>This order contain gift
                        </small>
                    </>
                )}
                value={getTotalBasketPrice(basket)}
                decimalScale={2}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                />
            <button>Proceed To Checkout</button>
        </div>
    )
}

export default Subtotal;