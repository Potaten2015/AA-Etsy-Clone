import { fetch } from './csrf';

const POPULATE = 'browse/populate'
const CURRENT = 'browse/current'
const PHOTO = 'browse/current/photo'
const PROFILE = 'browse/profile'
const RECENT = 'browse/recent'
const FAV = 'browse/fav'
const UNFAV = 'browse/unfav'
const FOLLOW = 'browse/follow'
const UNFOLLOW = 'browse/unfollow'


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

const fav = (data) => {
    return {
        type: FAV,
        payload: data
    }
}

const unfav = (data) => {
    return {
        type: UNFAV,
        payload: data
    }
}

const follow = (following) => {
    return {
        type: FOLLOW,
        payload: following
    }
}

const unfollow = (following) => {
    return {
        type: UNFOLLOW,
        payload: following
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

export const favoriteItem = (item, userId) => async (dispatch) => {
    const res = await fetch('/api/favorite',{
        method: 'post',
        body: JSON.stringify({
            item,
            userId
        })
    })
    const {data} = res;
    dispatch(fav(data))
}

export const unfavoriteItem = (item, userId) => async (dispatch) => {
    const res = await fetch('/api/favorite',{
        method: 'delete',
        body: JSON.stringify({
            item,
            userId
        })
    })
    const {data} = res;
    dispatch(unfav(data))
}

export const followUser = (followingUserId, followedUserId) => async (dispatch) => {
    const res = await fetch('/api/follow',{
        method: 'post',
        body: JSON.stringify({
            followingUserId,
            followedUserId
        })
    })
    const {data} = res;
    dispatch(follow(data))
}

export const unfollowUser = (followingUserId, followedUserId) => async (dispatch) => {
    const res = await fetch('/api/follow',{
        method: 'delete',
        body: JSON.stringify({
            followingUserId,
            followedUserId
        })
    })
    const {data} = res;
    dispatch(unfollow(data))
}

const initialState = {};

const browseReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case POPULATE:
            newState = action.payload;
            if(state.recentlyVisited){
                newState.recentlyVisited = state.recentlyVisited;
            } else {
                newState.recentlyVisited = [];
            }
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
            let found;
            if(!newState.recentlyVisited){
                newState.recentlyVisited = []
                return newState
            } else {
                found = newState.recentlyVisited.find(item => item.id === action.payload.id)
            }

            if(!found) {
                newState.recentlyVisited = [...state.recentlyVisited, action.payload]
            }
            return newState;
        case FAV:
            newState = state;
            newState.favoriteItems = action.payload.favoriteItems;
            newState.favorites = action.payload.favorites;
            return newState;
        case UNFAV:
            newState = state;
            newState.favoriteItems = action.payload.favoriteItems;
            newState.favorites = action.payload.favorites;
            return newState;
        case FOLLOW:
            newState = state;
            newState.follows = action.payload.follows;
            return newState;
        case UNFOLLOW:
            newState = state;
            newState.follows = action.payload.follows;
            return newState;
        default:
            return state;
    }
}

export default browseReducer;
