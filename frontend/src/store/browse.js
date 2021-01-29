import { fetch } from './csrf';

const POPULATE = 'browse/populate'
const CURRENT = 'browse/current'
const PHOTO = 'browse/current/photo'


const populate = (itemData) => {
    return {
        type: POPULATE,
        payload: itemData
    }
}

const current = (item) => {
    return {
        type: CURRENT,
        payload: item
    }
}

const photo = (url) => {
    return {
        type: PHOTO,
        payload: url
    }
}

export const populateBrowse = (user) => async (dispatch) => {
    const response = await fetch('/api/browse/populate', {
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

const initialState = {favoriteItems: [], newlyAddedItems: [], browseItems:[], recentlyVisitedItems: [], currentItem: null, currentPhoto: null};

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
        default:
            return state;
    }
}

export default browseReducer;
