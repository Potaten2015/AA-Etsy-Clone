import {useSelector, useDispatch} from 'react-redux';
import ProductPageSmall from '../ProductPageSmall';
import {NavLink, useHistory, useParams} from 'react-router-dom';
import {useEffect} from 'react';
import { updateCurrentItem, updateCurrentPhoto } from '../../store/browse';
import Comment from '../Comment';
import {addItem} from '../../store/cart'
import CommentForm from '../CommentForm'
import './ProductPage.css'
import {updateCurrentProfile} from '../../store/browse'


const ProductPage = ({url}) => {

    const dispatch = useDispatch();
    const history = useHistory();

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
                        <div className='product-page-right-organizer'>
                            <div className='product-page-item-info'>
                                <div className='product-page-item-header'>
                                    <h2 className='product-page-item-name'>{item.name}</h2>
                                    <p className='product-page-item-price'>${item.price.toFixed(2)}</p>
                                </div>
                                <p className='product-page-item-description'>{item.longDescription}</p>
                                <div className='product-page-button-container'>
                                    <button className='product-page-button' onClick={e => dispatch(addItem(item))}>A D D • T O • C A R T</button>
                                    <button className='product-page-button' onClick={e => {
                                        dispatch(updateCurrentProfile(item.User))
                                        history.push(`/profile/${item.User.id}`)
                                    }}>V I S I T • S E L L E R • P A G E</button>
                                    <button className='product-page-button' onClick={e => dispatch(addItem(item))}>F A V O R I T E</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CommentForm />
                {item.Comments && item.Comments.map(com => <Comment commentId = {com.id} key={com.id} title={com.title} content={com.content} author={com.User} rating={com.rating}/>)}
            </div>
        </>
    )
}

export default ProductPage;
