import {useSelector, useDispatch} from 'react-redux';
import ProductPageImage from '../ProductPageImage';
import ProductPageSmall from '../ProductPageSmall';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import { updateCurrentItem, updateCurrentPhoto } from '../../store/browse';
import Comment from '../Comment';
import {addItem} from '../../store/cart'


const ProductPage = ({url}) => {

    const dispatch = useDispatch();

    const itemId = parseInt((useParams().id), 10);

    let photoUrl = useSelector(state => state.browse.currentPhoto)
    let items = useSelector(state => state.browse.browseItems)
    let item = useSelector(state => state.browse.currentItem)

    if(!item){
        item = items.find(el => el.id === itemId);
        dispatch(updateCurrentItem(item))
    }

    if(!photoUrl){
        photoUrl = item.photos[0];
        dispatch(updateCurrentPhoto(photoUrl))
    }

    return (
        <>
            <h2>{item.name}</h2>
            <ProductPageImage url={photoUrl} />
            <button onClick={e => dispatch(addItem(item))}>Add to Cart</button>
            <p>{item.longDescription}</p>
            {item.photos.map((image, index) => <ProductPageSmall key={image} url={image} index={index} />)}
            {item.Comments && item.Comments.map(com => <Comment key={com.id} title={com.title} content={com.content} author={com.User} rating={com.rating}/>)}
        </>
    )
}

export default ProductPage;
