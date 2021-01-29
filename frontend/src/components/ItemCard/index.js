import {NavLink} from 'react-router-dom';
import { updateCurrentItem, updateCurrentPhoto } from '../../store/browse';
import './ItemCard.css'
import {useDispatch, useSelector} from 'react-redux';

const ItemCard = ({item}) => {

    const dispatch = useDispatch();

    const update = async () => {
        await dispatch(updateCurrentItem(item))
        await dispatch(updateCurrentPhoto(item.photos[0]))
    }

    return (
    <NavLink to={`/item/${item.id}`} className='ItemCard-Link' onClick={e => update()}>
        <div>
            <p>{item.name}</p>
            <p>{item.shortDescription}</p>
            <p>{`$${item.price}`}</p>
            <img src={item.thumbnail} alt={item.name} />
        </div>
    </NavLink>)
}

export default ItemCard;
