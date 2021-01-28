import {NavLink} from 'react-router-dom';

const ItemCard = ({item}) => {

    return (
    <NavLink to='/'>
        <div>
            <p>{item.name}</p>
            <p>{item.shortDescription}</p>
            <p>{item.price}</p>
            <img src={item.thumbnail} alt={item.name} />
        </div>
    </NavLink>)
}

export default ItemCard;
