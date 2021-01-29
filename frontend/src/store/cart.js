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
        payload: itemId
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

export const addItem = (item) => async (dispatch) => {
    dispatch(add(item));
}

export const removeItem = (itemId) => async (dispatch) => {
    dispatch(remove(itemId));
}

export const plusItem = (itemId) => async (dispatch) => {
    dispatch(plus(itemId));
}

export const minusItem = (itemId) => async (dispatch) => {
    dispatch(minus(itemId));
}

export const buyItem = () => async (dispatch) => {
    dispatch(buy());
}

export const emptyItem = () => async (dispatch) => {
    dispatch(empty());
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
                newState[itemId] = {};
                newState[itemId].cartItem = item;
                newState[itemId].quantity = 1
            };
            return newState;
        case REMOVE:
            newState = state;
            itemId = action.payload;
            delete newState[itemId];
            return newState;
        case PLUS:
            newState = state;
            itemId = action.payload;
            newState[itemId].quantity += 1;
            return newState;
        case MINUS:
            newState = state;
            itemId = action.payload;
            newState[itemId].quantity -= 1;
            if(newState[itemId].quantity === 0){
                delete newState[itemId];
            }
            return newState;
        case BUY:
            newState = {};
            return newState;
        case EMPTY:
            newState = {};
            return newState;
        default:
            return state;
    }
}

export default cartReducer;
