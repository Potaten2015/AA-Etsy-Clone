import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import {buyItem,  emptyItem} from '../../store/cart.js'
import { useDispatch } from "react-redux";

const CartForm = ({cartItems, setCartToggle}) => {

    const [cartLoaded, setCartLoaded] = useState(false);
    const [formLoad, setFormLoad] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if(cartItems) setCartLoaded(true);
    }, [cartItems])

    return cartLoaded && (
        <form>
            {cartItems.map(item => <CartItem key={item.id} cartEntry={item} formToggle={setFormLoad} cartToggler={setCartToggle} />)}
            <button onClick={e => {
                e.preventDefault();
                dispatch(buyItem())}}>Buy</button>
            <button onClick={e =>{
                e.preventDefault()
                dispatch(emptyItem());
            }}>Empty</button>
        </form>
    )
}

export default CartForm;
