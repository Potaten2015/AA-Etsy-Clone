import { fetch } from './csrf';

const POPULATE = 'splash/populate'


const populate = (itemData) => {
    return {
        type: POPULATE,
        payload: itemData
    }
}

export const populateSplash = () => async (dispatch) => {
    const response = await fetch('/api/splash/populate')
    dispatch(populate(response.data))
}

const initialState = {};

const splashReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case POPULATE:
            newState = action.payload;
            return newState
        default:
            return state;
    }
}

export default splashReducer;
