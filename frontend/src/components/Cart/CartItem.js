import {removeItem, plusItem, minusItem} from '../../store/cart';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import './Cart.css'

const CartItem = ({cartEntry, formToggle, cartToggler}) => {

    const [stateSwitch, toggleSwitch] = useState(false);
    const dispatch = useDispatch();

    const toggler = () => {
        // toggleSwitch(prev => !prev);
        // formToggle(prev => !prev);
        cartToggler(prev => !prev)
    }

    useEffect(() => {
    }, [stateSwitch, dispatch])

    console.log("THE CART ENTRY:       ", cartEntry)

    return cartEntry && (
        <div>
            <label htmlFor={cartEntry.cartItem.name}>{cartEntry.cartItem.name}</label>
            <input value={cartEntry.quantity} type='number'/>
            <button onClick={e => {
                e.preventDefault();
                dispatch(plusItem(cartEntry.cartItem.id));
                toggler()
                }}>+</button>
            <button onClick={e => {
                e.preventDefault()
                dispatch(minusItem(cartEntry.cartItem.id));
                toggler()
                }}>-</button>
            <button onClick={e => {
                e.preventDefault()
                dispatch(removeItem(cartEntry.cartItem.id));
                toggler()
                }}>Remove</button>
        </div>
    )
}

export default CartItem;
