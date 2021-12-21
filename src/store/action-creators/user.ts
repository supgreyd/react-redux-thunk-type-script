import {UserAction, UserActionTypes} from "../../types/users";
import {Dispatch} from "redux";
import axios from "axios";


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const responce = await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch({
                type: UserActionTypes.FETCH_USERS_SUCCESS,
                payload: responce.data
            })
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Error!'
            })
        }
    }
}