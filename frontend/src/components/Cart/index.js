import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCart } from "../../store/cart";

import CartForm from "./CartForm";

const Cart = () => {

    const [cartToggle, setCartToggle] = useState(false);
    const dispatch = useDispatch();
    const storage = window.localStorage;
    const [cartLoaded, setCartLoaded] = useState(false);
    const cartData = Object.values(useSelector(state => state.cart));
    const cartTotal = cartData.reduce((accum, el) => {
        console.log(el)
        return accum + (el.cartItem.price * el.quantity);
    },0)

    console.log(cartTotal)

    useEffect(() => {
        if(cartData.length > 0){
            setCartLoaded(true)
        } else {
            setCartLoaded(false)
        }
    }, [cartData, dispatch])

    return cartLoaded && (
        <>
            <div className='whole-cart'>
                <p className='cart-total'>{`C A R T • T O T A L : $${(cartTotal).toFixed(2)}`}</p>
                <CartForm cartItems={cartData} setCartToggle={setCartToggle}/>
            </div>
        </>
    )
}

export default Cart;
