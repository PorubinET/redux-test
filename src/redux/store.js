import { createStore } from 'redux'; 
// поключаем хранилище из redux

const initialState = {
    likes: 8
    // базовое состояние хранилища
    // свойство likes которое передается в props
}

const reducer = (state = initialState, action) => {
    console.log('reducer > ', action); 
    return state;
    // передаем в state <= initialState
}


const store = createStore(reducer); 
//создаем хранилище createStore, которое будет принимать в себя 
//reducer

export default store;