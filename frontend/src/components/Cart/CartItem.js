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
            <tr className='cart-item-row'>
                <td className='cart-item-image' style={{backgroundImage: `url(${cartEntry.cartItem.photos[0]})`}}>
                </td>
                <td className='cart-item-data'>
                    <label className='cart-item-label' htmlFor={cartEntry.cartItem.name}>{cartEntry.cartItem.name}</label>
                </td>
                <td className='cart-item-data'>
                    <input className='cart-item-quantity' value={cartEntry.quantity} type='number'/>
                </td>
                <td className='cart-item-data'>
                    <button className='cart-item-buttons' onClick={e => {
                    e.preventDefault();
                    dispatch(plusItem(cartEntry.cartItem.id));
                    toggler()
                    }}>+</button>
                    <button className='cart-item-buttons' onClick={e => {
                    e.preventDefault()
                    dispatch(minusItem(cartEntry.cartItem.id));
                    toggler()
                    }}>-</button>
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
