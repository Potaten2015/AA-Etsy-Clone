import {removeItem, plusItem, minusItem, buyItem, emptyItem} from '../../store/cart';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

const CartItem = ({cartEntry}) => {

    const dispatch = useDispatch();
    console.log("SINGLE CART ENTRY", cartEntry)

    return (
        <div>
            <label htmlFor={cartEntry.cartItem.name}>{cartEntry.cartItem.name}</label>
            <input value={cartEntry.quantity} type='number'/>
            <button onClick={e => {
                e.preventDefault();
                console.log(cartEntry.id)
                dispatch(plusItem(cartEntry.cartItem.id));
                }}>+</button>
            <button onClick={e => {
                e.preventDefault();
                dispatch(minusItem(cartEntry.cartItem.id));
                }}>-</button>
            <button onClick={e => {
                e.preventDefault()
                dispatch(removeItem(cartEntry.cartItem.id));
                }}>Remove</button>
        </div>
    )
}

export default CartItem;
