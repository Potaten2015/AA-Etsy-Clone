import { fetch } from './csrf';

const POPULATE = 'browse/populate'

const populate = (itemData) => {
    return {
        type: POPULATE,
        payload: itemData
    }
}

export const populateBrowse = (user) => async (dispatch) => {
    const response = await fetch('/api/browse/populate', {
        method: 'post',
        body: JSON.stringify(user),
    })

    dispatch(populate(response.data))
}

const initialState = null;

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
        default:
            return state;
    }
}

export default browseReducer;
