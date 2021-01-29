import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import {buyItem,  emptyItem} from '../../store/cart.js'

const CartForm = ({cartItems, setCartToggle}) => {

    const [cartLoaded, setCartLoaded] = useState(false);
    const [formLoad, setFormLoad] = useState(false);

    useEffect(() => {
        if(cartItems) setCartLoaded(true);
    }, [cartItems])

    console.log("THE CART ITEMS:    ", cartItems)

    return cartLoaded && (
        <form>
            {cartItems.map(item => <CartItem key={item.id} cartEntry={item} formToggle={setFormLoad} cartToggler={setCartToggle} />)}
            <button>Buy</button>
            <button>Empty</button>
        </form>
    )
}

export default CartForm;
