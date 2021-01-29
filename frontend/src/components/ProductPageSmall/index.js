import { NavLink } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { updateCurrentPhoto } from "../../store/browse";
import './ProductPageSmall.css'


const ProductPageSmall = ({url, index}) => {

    const dispatch = useDispatch();
    const item = useSelector(state => state.browse.currentItem);

    const photoUpdate = (e) =>{
        e.preventDefault();
        dispatch(updateCurrentPhoto(url))
    }

    return (
        <NavLink to={`/item/${item.id}/`} onClick={e => photoUpdate(e)}>
            <img src={url} className='small-images' />
        </NavLink>
    )
}

export default ProductPageSmall;
