// import { combineReducers } from "redux";
// import { likesReducer } from "./likesReducer"
import { INCREMENT, DECREMENT } from "./types";

export const rootReducer = (state, action) => {
    console.log('likesReducer > ', action)
    
    switch(action.type) {
        case INCREMENT:
            return {
                ...state, // через оператор ... разворачиваем и возвращаем новый state
                likes: state.likes + 1
            }
        case DECREMENT:
            return {
                ...state, // через оператор ... разворачиваем и возвращаем новый state
                likes: state.likes - 1
            }
        default:
            return state;
    }
}