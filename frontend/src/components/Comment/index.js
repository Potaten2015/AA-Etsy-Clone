import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { NavLink } from 'react-router-dom';
import {updateCurrentProfile} from '../../store/browse'
import CommentForm from '../Browse/CommentForm';

const Comment = ({title, content, author, rating}) => {

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
                    <CommentForm />
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
                                        <button>Delete</button>
                                    </>
                                )}
                            </div>
                        </>
                    )}

                    {beingEdited && (
                    <>
                        <CommentForm />
                        <button onClick={e => setBeingEdited(false)}>Cancel</button>
                    </>
                    )}
                </>
                )

}

export default Comment;
