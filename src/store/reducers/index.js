import { FETCH_USER_START, FETCH_USER_SUCCESS, FETCH_CHAR_INFO_START, FETCH_CHAR_INFO_SUCCESS } from '../actions'

const initialState = {
    isLoading: false,
    data: [],
    characters: []
}

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                characters: action.payload.characters
            }
        case FETCH_CHAR_INFO_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_CHAR_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        default:
            return state
    }
}

export default Reducer
