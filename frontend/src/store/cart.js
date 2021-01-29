import { delete } from '../../../backend/routes/api';
import { fetch } from './csrf';

const ADD = 'cart/add'
const REMOVE = 'cart/remove'
const PLUS = 'cart/plus'
const MINUS = 'cart/minus'
const BUY = 'cart/buy'
const EMPTY = 'cart/empty'

const add = (item) => {
    return {
        type: ADD,
        payload: item
    }
}

const remove = (itemId) => {
    return {
        type: REMOVE,
        payload: itemID
    }
}

const plus = (itemId) => {
    return {
        type: PLUS,
        payload: itemId
    }
}

const minus = (itemId) => {
    return {
        type: MINUS,
        payload: itemId
    }
}

const buy = () => {
    return {
        type: BUY,
    }
}

const empty = () => {
    return {
        type: EMPTY,
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

const initialState = {};

const cartReducer = (state = initialState, action) => {
    let newState;
    let item;
    let itemId;
    switch (action.type) {
        case ADD:
            newState = state;
            item = action.payload;
            itemId = item.id;
            if(newState[itemId]) {
                newState[itemId].quantity ++;
            } else {
                newState[itemId].cartItem = item;
                newState[itemId].quantity = 1
            };
            return newState;
        case REMOVE:
            itemId = action.payload;
            delete newState[itemId];
        case PLUS:
            newState = state;
            newState[itemId].quantity += 1;
            return newState;
        case MINUS:
            newState = state;
            newState[itemId].quantity -= 1;
            if(newState.itemId.quantity === 0){
                delete newState.itemId;
            }
            return newState;
        case BUY:
            newState = {};
        case EMPTY:
            newState = {};
            return newState;
        default:
            return state;
    }
}

export default browseReducer;
