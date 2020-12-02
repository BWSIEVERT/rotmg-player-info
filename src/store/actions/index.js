import axios from "axios";

// Action Types
export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";

// Action Creators
export const fetchUserInfo = (username) => {
  return (dispatch) => {
    // Dispatch Action
    dispatch({ type: FETCH_USER_START });

    // Fetch The User Data
    axios
      .get(`https://nightfirec.at/realmeye-api/?player=${username}`)
      .then((res) => {
          console.log(res)
          console.log(res.data)
          console.log(res.data.characters)
        // Dispatch Action
        dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log("An error has occurred while fetching the user", err);
      });
  };
};

export const FETCH_CHAR_INFO_START = "FETCH_CHAR_USER_START";
export const FETCH_CHAR_INFO_SUCCESS = "FETCH_CHAR_INFO_SUCCESS";

export const fetchCharInfo = (username) => {
  return (dispatch) => {
    // Dispatch Action
    dispatch({ type: FETCH_CHAR_INFO_START });

    // Fetch The Char Data
    axios
        .get(`https://nightfirec.at/realmeye-api/?player=${username}`)
        .then((res) => {
      //Dispatch Action
      dispatch({ type: FETCH_CHAR_INFO_START, payload: res.data.characters });
    })
    .catch(err => {
        console.log("An error has occurred while fetching the user characters", err)
    })
  };
};
