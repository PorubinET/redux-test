import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux'; 
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
// этот компонент свяжет redux и react
// оборачиваеь в Provider всё приложение

const store = createStore(rootReducer)
// создаем хранилище и передаем его в приложение через <Provider/>

ReactDOM.render(
  <Provider store={store}> 
    <App />,
  </Provider>,
  document.getElementById('root')
);
