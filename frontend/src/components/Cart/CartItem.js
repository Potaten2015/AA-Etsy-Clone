import {removeItem, plusItem, minusItem, buyItem, emptyItem} from '../../store/cart';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

const CartItem = ({cartEntry}) => {
    return (
        <div>
            <label htmlFor={cartEntry.cartItem.name}>{cartEntry.cartItem.name}</label>
            <input value={cartEntry.quantity} type='number'/>
            <button onClick={plusItem()}>+</button>
            <button onClick={minusItem()}>-</button>
            <button onClick={removeItem()}>Remove</button>
        </div>
    )
}

export default CartItem;
