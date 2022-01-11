import { COMMENT_CREATE, COMMENT_UPDATE } from "./types";

const initialState = {
    comments: []
}

export const commentsReducer = (state = initialState, action) => {
    console.log('comments Reducer > ', action)
    switch(action.type) {

        case COMMENT_CREATE:
            return {
                ...state, // через оператор ... разворачиваем копируем и возвращаем новый state
                comments: [...state.comments, action.data]
            }

        case COMMENT_UPDATE:
            const { data } = action;
            const { comments } = state;
            const itemIndex = comments.findIndex(res => res.id === data.id)

            const nextComments = [
                ...comments.slice(0, itemIndex),
                data, 
                ...comments.slice(itemIndex + 1)
            ];

            return {
                ...state, // через оператор ... разворачиваем копируем и возвращаем новый state
                comments: nextComments
            }
        default:
            return state;
    }
}