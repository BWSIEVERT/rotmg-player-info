import axios from 'axios'

// Action Types
export const FETCH_USER_START = 'FETCH_USER_START'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'

// Action Creators
export const fetchUserInfo = (username) => {
    return (dispatch) => {

        // Dispatch Action
        dispatch({ type: FETCH_USER_START})

        // Fetch The User Data
        axios.get(`https://nightfirec.at/realmeye-api/?player=${username}`)
        .then(res => {
            
            // Dispatch Action
            dispatch({ type: FETCH_USER_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log('An error has occured while fetching the user', err)
        })
    }
}