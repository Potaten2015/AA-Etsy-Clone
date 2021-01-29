import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { NavLink } from 'react-router-dom';
import {updateCurrentProfile} from '../../store/browse'

const Comment = ({title, content, author, rating}) => {

    const dispatch = useDispatch();
    const [commentLoaded, setCommentLoaded] = useState(false);
    const sessionUser = useSelector(state => state.session.user);
    useEffect(() => {
        if(author && sessionUser){
            setCommentLoaded(true)
        }
    },[author, sessionUser])

    return (

            commentLoaded && (
                <>
                    <div>
                        <h3>{`${title} ${rating} Stars`}</h3>
                        <NavLink to={`/profile/${author.id}`} onClick={e => dispatch(updateCurrentProfile(author))}>{`-${author.username}`}</NavLink>
                    </div>
                    <p>{content}</p>
                    <div>
                        {(sessionUser.id === author.id) && (
                            <>
                                <button>Delete</button>
                                <button>Edit</button>
                            </>
                        )}
                    </div>
                </>)
    )
}

export default Comment;
