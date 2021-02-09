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
        <>
            <div className='cart-form-holder'>
                <div className='cart-main-button-holder'>
                    <button className='cart-main-buttons' onClick={e => {
                        e.preventDefault();
                        dispatch(buyItem(cartItems, userId))}}>B U Y</button>
                    <button className='cart-main-buttons' onClick={e =>{
                        e.preventDefault()
                        dispatch(emptyItem());
                    }}>E M P T Y</button>
                </div>
                <form className='cart-form'>
                    <table>
                        {cartItems.map(item => <CartItem key={item.id} cartEntry={item} formToggle={setFormLoad} cartToggler={setCartToggle} />)}
                    </table>
                </form>
            </div>
        </>
    )
}

export default CartForm;
