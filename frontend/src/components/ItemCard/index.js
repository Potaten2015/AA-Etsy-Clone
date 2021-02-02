import {NavLink} from 'react-router-dom';
import { updateCurrentItem, updateCurrentPhoto, updateRecentItems } from '../../store/browse';
import './ItemCard.css'
import {useDispatch, useSelector} from 'react-redux';
import { addItem } from '../../store/cart';

const ItemCard = ({item}) => {

    const dispatch = useDispatch();

    const update = async () => {
        await dispatch(updateCurrentItem(item))
        await dispatch(updateCurrentPhoto(item.photos[0]))
    }

    console.log(item.photos[0])

    return (
        <div className='item-card-container'>
            <NavLink to={`/item/${item.id}`} className='ItemCard-Link' onClick={e => {
                update()
                dispatch(updateRecentItems(item))
                }}>
                <div className="item-card" style={{backgroundImage: `url(${item.photos[0]})`}}>
                    <div className='product-info hide'>
                        <h3 className='product-info-text'>{item.name}</h3>
                        <p className='product-info-text'>{item.shortDescription}</p>
                    </div>
                    <div className='product-thumbnail-buy-holder'>
                        <div className='product-thumbnail-buy hide'>
                            <p>{`$${item.price.toFixed(2)}`}</p>
                            <button onClick={e => dispatch(addItem(item))}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default ItemCard;
