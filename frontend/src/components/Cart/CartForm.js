import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import {buyItem,  emptyItem} from '../../store/cart.js'
import { useDispatch, useSelector } from "react-redux";

const CartForm = ({cartItems, setCartToggle}) => {

    const [cartLoaded, setCartLoaded] = useState(false);
    const [formLoad, setFormLoad] = useState(false);
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user.id)

    useEffect(() => {
        if(cartItems) setCartLoaded(true);
    }, [cartItems])

    return cartLoaded && (
        <form>
            {cartItems.map(item => <CartItem key={item.id} cartEntry={item} formToggle={setFormLoad} cartToggler={setCartToggle} />)}
            <button onClick={e => {
                e.preventDefault();
                dispatch(buyItem(cartItems, userId))}}>Buy</button>
            <button onClick={e =>{
                e.preventDefault()
                dispatch(emptyItem());
            }}>Empty</button>
        </form>
    )
}

export default CartForm;
