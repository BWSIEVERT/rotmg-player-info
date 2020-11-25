import { FETCH_USER_START, FETCH_USER_SUCCESS } from '../actions'

const initialState = {
    isLoading: false,
    data: []
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
                data: action.payload
            }
        default:
            return state
    }
}

export default Reducer
