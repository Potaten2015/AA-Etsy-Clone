import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { populateBrowse } from '../../store/browse';
import { createComment } from '../../store/comment';
import './CommentForm.css'

const CommentForm = ({oldContent, oldRating, oldTitle}) => {

    const dispatch = useDispatch()
    const [formLoaded, setFormLoaded] = useState(false);
    const item = useSelector(state => state.browse.currentItem);
    const itemName = item.name;
    const itemId = useSelector(state => state.browse.currentItem.id);
    const user = useSelector(state => state.session.user)
    const userId = user.id;

    const [content, setContent] = useState('');
    if(oldContent) setContent(oldContent);
    const [rating, setRating] = useState(5);
    if(oldRating) setRating(oldRating);
    const [title, setTitle] = useState('');
    if(oldTitle) setTitle(oldTitle);

    // useEffect(() => {

    // },[])

    return (
        <form className='CommentForm-form'>
            <table>
                <thead colSpan='2'>
                    <tr>
                        <th>
                            <h3>Tell us about {itemName}:</h3>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Title:</td>
                        <td>
                            <input defaultValue={title} onChange={e => setTitle(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Comment:</td>
                        <td>
                            <textarea defaultValue={content} onChange={e => setContent(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Rating:</td>
                        <td>
                            <input type='number' min='1' max='5' name='rating' defaultValue={rating}/>
                            <button onClick={e => {
                                e.preventDefault();
                                if(rating < 5) setRating(prev => prev + 1);
                                }}>+</button>
                            <button onClick={e => {
                                e.preventDefault()
                                if(rating > 1) setRating(prev => prev - 1)
                                }}>-</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button onClick={e => {
                e.preventDefault()
                dispatch(createComment({userId, content, rating, title, itemId}))
                dispatch(populateBrowse(user))
                setRating(5)
                setContent('')
                setTitle('');
            }
                }>Submit</button>
            <button onClick={ e => {
                e.preventDefault()
                setRating(5)
                setContent('')
                setTitle('');
            }
            }>Clear</button>
        </form>
    )

}

export default CommentForm;
