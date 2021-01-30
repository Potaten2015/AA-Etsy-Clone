import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './CommentForm.css'

const CommentForm = ({oldComment, oldRating, oldTitle}) => {

    const [formLoaded, setFormLoaded] = useState(false);
    const item = useSelector(state => state.browse.currentItem);
    const itemName = item.name;

    const [comment, setComment] = useState('');
    if(oldComment) setComment(oldComment);
    const [rating, setRating] = useState(5);
    if(oldRating) setRating(oldComment);
    const [title, setTitle] = useState('');
    if(oldTitle) setTitle(oldTitle);

    useEffect(() => {

    },[])

    return (
        <form className='CommentForm-form'>
            <table>
                <thead colspan='2'>
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
                            <input />
                        </td>
                    </tr>
                    <tr>
                        <td>Comment:</td>
                        <td>
                            <textarea />
                        </td>
                    </tr>
                    <tr>
                        <td>Rating:</td>
                        <td>
                            <input type='number' min='1' max='5' name='rating' value={rating} defaultValue='5'/>
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
            <button>Submit</button>
            <button onClick={ e => {
                e.preventDefault()
                setRating(5)
                setComment('')
                setTitle('');
            }
            }>Clear</button>
        </form>
    )

}

export default CommentForm;
