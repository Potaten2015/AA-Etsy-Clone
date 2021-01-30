import { fetch } from './csrf';

const DELETE = 'comment/delete'
const EDIT = 'comment/edit'
const POST = 'comment/create'


const deleteComment = (itemData) => {
    return {
        type: POPULATE,
        payload: itemData
    }
}

const editComment = (comment) => {
    return {
        type: CURRENT,
        payload: comment
    }
}

export const createComment = (user) => async (dispatch) => {
    const response = await fetch('/api/comment/', {
        method: 'post',
        body: JSON.stringify(user),
    })
    dispatch(populate(response.data))
}

export const updateCurrentItem = (item) => async (dispatch) => {
    dispatch(current(item))
}

export const updateCurrentPhoto = (url) => async (dispatch) => {
    dispatch(photo(url))
}

export const updateCurrentProfile = (info) => async (dispatch) => {
    dispatch(profile(info))
}

const initialState = {favoriteItems: [], newlyAddedItems: [], browseItems:[], recentlyVisitedItems: [], currentItem: null, currentPhoto: null, currentProfile: null};

const browseReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case POPULATE:
            newState = action.payload;
            if(!newState){
                return null
            } else {
                return newState;
            }
        case CURRENT:
            newState = state;
            newState.currentItem = action.payload;
            return newState;
        case PHOTO:
            newState = state;
            newState.currentPhoto = action.payload;
            return newState;
        case PROFILE:
            newState = state;
            newState.currentProfile = action.payload;
            return newState;
        default:
            return state;
    }
}

export default browseReducer;
