// корневой reduce в котором будут собираться все reduce

import { combineReducers } from "redux";
import { likesReducer } from "./likesReducer";
import { inputReducer } from "./inputReducer";
import { commentsReducer } from "./commentsReducer"

// эта функция combineReducers объединяет 
// все редюсеры для компонентов


export const rootReducer = combineReducers({
    likesReducer,
    inputReducer,
    commentsReducer
})