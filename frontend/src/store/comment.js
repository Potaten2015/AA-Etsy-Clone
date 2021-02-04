import { fetch } from './csrf';

const REMOVE = 'comment/remove'
const EDIT = 'comment/edit'
const POST = 'comment/create'


const remove = (itemData) => {
    return {
        type: REMOVE
    }
}

const edit = (info) => {
    return {
        type: EDIT
    }
}

const post = (info) => {
    return {
        type: POST
    }
}

export const removeComment = (commentId) => async (dispatch) => {
    await fetch('/api/comment/', {
        method: 'delete',
        body: JSON.stringify({
            commentId
        }),
    })
    dispatch(remove())
}



export const createComment = ({userId, itemId, rating, title, content}) => async (dispatch) => {
    await fetch('/api/comment/', {
        method: 'post',
        body: JSON.stringify({
            userId,
            itemId,
            content,
            rating,
            title
        }),
    })
    dispatch(post())
}

const initialState = {};

const browseReducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE:
            break;
        case EDIT:
            break;
        case POST:
            break;
        default:
            return state;
    }
}

export default browseReducer;
