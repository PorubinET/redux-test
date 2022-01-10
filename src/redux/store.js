import { createStore } from 'redux'; 
// поключаем хранилище из redux

const initialState = {
    likes: 0
    // базовое состояние хранилища
    // свойство likes которое передается в props
}

const reducer = (state = initialState, action) => {
    console.log('reducer > ', action); 
    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state, // через оператор ... разворачиваем и возвращаем новый state
                likes: state.likes + 1
            }
        case 'DECREMENT':
            return {
                ...state, // через оператор ... разворачиваем и возвращаем новый state
                likes: state.likes - 1
            }
        default:
            return state;
    }
    // не нарушать принцип иммутабильности! 
    // передаем в state <= initialState
}


const store = createStore(reducer); 
//создаем хранилище createStore, которое будет принимать в себя 
//reducer

export default store;