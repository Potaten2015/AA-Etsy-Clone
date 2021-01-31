import {NavLink} from 'react-router-dom';
import { updateCurrentItem, updateCurrentPhoto } from '../../store/browse';
import './ItemCard.css'
import {useDispatch, useSelector} from 'react-redux';
import { addItem } from '../../store/cart';

const ItemCard = ({item}) => {

    const dispatch = useDispatch();

    const update = async () => {
        await dispatch(updateCurrentItem(item))
        await dispatch(updateCurrentPhoto(item.photos[0]))
    }

    return (
        <div className="item-card">
            <NavLink to={`/item/${item.id}`} className='ItemCard-Link' onClick={e => update()}>
                <div>
                    <p>{item.name}</p>
                    <img className='product-thumbnail' src={item.thumbnail} alt={item.name} />
                        <p>{item.shortDescription}</p>
                </div>
            </NavLink>
                    <div className='product-thumbnail-buy'>
                        <p>{`$${item.price}`}</p>
                        <button onClick={e => dispatch(addItem(item))}>Add to Cart</button>
                    </div>
        </div>
    )
}

export default ItemCard;
