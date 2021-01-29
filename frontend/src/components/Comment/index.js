import {useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';

const Comment = ({title, content, author}) => {

    console.log('TITLE', title)
    console.log('CONTENT', content)

    return (
        <>
            <div>
                <h3>{title}</h3>
                <NavLink to={`/profile/${author.id}`}>{`-${author.username}`}</NavLink>
            </div>
            <p>{content}</p>
        </>
    )
}

export default Comment;
