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

    return cartEntry && (
        <div>
            <tr>
                <td className='cart-item-image' style={{backgroundImage: `url(${cartEntry.cartItem.photos[0]})`}}>
                </td>
                <td>
                    <label className='cart-item-label' htmlFor={cartEntry.cartItem.name}>{cartEntry.cartItem.name}</label>
                </td>
                <td>
                    <input className='cart-item-quantity' value={cartEntry.quantity} type='number'/>
                </td>
                <td>
                    <button className='cart-item-buttons' onClick={e => {
                    e.preventDefault();
                    dispatch(plusItem(cartEntry.cartItem.id));
                    toggler()
                    }}>+</button>
                </td>
                <td>
                    <button className='cart-item-buttons' onClick={e => {
                    e.preventDefault()
                    dispatch(minusItem(cartEntry.cartItem.id));
                    toggler()
                    }}>-</button>
                </td>
                <td>
                    <button className='cart-item-buttons' onClick={e => {
                        e.preventDefault()
                        dispatch(removeItem(cartEntry.cartItem.id));
                        toggler()
                        }}>Remove</button>
                </td>
            </tr>
        </div>
    )
}

export default CartItem;
