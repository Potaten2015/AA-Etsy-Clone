import { fetch } from './csrf';

const POPULATE = 'browse/populate'
const CURRENT = 'browse/current'
const PHOTO = 'browse/current/photo'
const PROFILE = 'browse/profile'
const RECENT = 'browse/recent'


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

const profile = (info) => {
    return {
        type: PROFILE,
        payload: info
    }
}

const recent = (item) => {
    return {
        type: RECENT,
        payload: item
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

export const updateCurrentProfile = (info) => async (dispatch) => {
    dispatch(profile(info))
}

export const updateRecentItems = (item) => async (dispatch) => {
    dispatch(recent(item))
}

const initialState = {favoriteItems: [], newlyAddedItems: [], browseItems:[], recentlyVisitedItems: [], currentItem: null, currentPhoto: null, currentProfile: null, categories: null};

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
        case RECENT:
            newState = state;
            newState.recentlyVisitedItems.push(action.payload)
            return newState;
        default:
            return state;
    }
}

export default browseReducer;
