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

    useEffect(() => {
        if(cartData.length > 0){
            setCartLoaded(true)
        } else {
            setCartLoaded(false)
        }
    }, [cartData, dispatch])

    return cartLoaded && (
        <>
            <CartForm cartItems={cartData} setCartToggle={setCartToggle}/>
        </>
    )
}

export default Cart;
