import { NavLink } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { updateCurrentPhoto } from "../../store/browse";
import '../ProductPage/ProductPage.css'


const ProductPageSmall = ({url, index}) => {

    const dispatch = useDispatch();
    const item = useSelector(state => state.browse.currentItem);

    const photoUpdate = (e) =>{
        e.preventDefault();
        dispatch(updateCurrentPhoto(url))
    }

    return (
        <img onClick={e => photoUpdate(e)} src={url} className='small-images' />
    )
}

export default ProductPageSmall;
