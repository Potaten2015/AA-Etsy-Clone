import {useSelector, useDispatch} from 'react-redux';
import ProductPageSmall from '../ProductPageSmall';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import { updateCurrentItem, updateCurrentPhoto } from '../../store/browse';
import Comment from '../Comment';
import {addItem} from '../../store/cart'
import CommentForm from '../CommentForm'
import './ProductPage.css'


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
            <div className='product-page-content'>
                <div className='product-page-flex'>
                    <div className='product-page-left-half'>
                        <img className='product-page-image' src={photoUrl}/>
                        <div className='product-page-small-images'>
                            {item.photos.map((image, index) => <ProductPageSmall key={image} url={image} index={index} />)}
                        </div>
                    </div>
                    <div className='product-page-right-half'>
                        <div className='product-page-item-info'>
                            <h2>{item.name}</h2>
                            <p>{item.longDescription}</p>
                            <button className='product-page-add-button' onClick={e => dispatch(addItem(item))}>Add to Cart</button>
                        </div>
                        <CommentForm />
                        {item.Comments && item.Comments.map(com => <Comment commentId = {com.id} key={com.id} title={com.title} content={com.content} author={com.User} rating={com.rating}/>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPage;
