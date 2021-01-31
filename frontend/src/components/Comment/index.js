import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { NavLink } from 'react-router-dom';
import {populateBrowse, updateCurrentProfile} from '../../store/browse'
import { removeComment } from '../../store/comment';
import CommentForm from '../CommentForm';

const Comment = ({title, content, author, rating, commentId}) => {

    const dispatch = useDispatch();
    const [commentLoaded, setCommentLoaded] = useState(false);
    const sessionUser = useSelector(state => state.session.user);
    const [beingEdited, setBeingEdited] = useState(false);


    useEffect(() => {
        if(author && sessionUser){
            setCommentLoaded(true)
        }
    },[author, sessionUser])

    return (
                <>
                    {!beingEdited && (
                        <>
                            <div>
                                <h3>{`${title} ${rating} Stars`}</h3>
                                <NavLink to={`/profile/${author.id}`} onClick={e => dispatch(updateCurrentProfile(author))}>{`-${author.username}`}</NavLink>
                            </div>
                            <p>{content}</p>
                            <div>
                                {(sessionUser.id === author.id) && (
                                    <>
                                        <button onClick={e => setBeingEdited(true)}>Edit</button>
                                        <button onClick={e => {
                                            e.preventDefault()
                                            dispatch(removeComment(commentId))
                                            dispatch(populateBrowse(sessionUser))
                                        }}>Delete</button>
                                    </>
                                )}
                            </div>
                        </>
                    )}

                    {beingEdited && (
                    <>
                        <CommentForm oldContent={content} oldTitle={title} oldRating={rating}/>
                        <button onClick={e => setBeingEdited(false)}>Cancel</button>
                    </>
                    )}
                </>
                )

}

export default Comment;
