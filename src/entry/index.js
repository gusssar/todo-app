/**
 * Created by anokhin on 04.04.2018.
 */
import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import TodoListContainer from '../containers/todo-list-container.js'
import {createStore} from 'redux';
import todoReducer from '../modules/todo-module.js';
import './global.css';

const store = createStore(todoReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
    <Provider store={store}>
        <TodoListContainer/>
    </Provider>,
    document.getElementById('root')
);