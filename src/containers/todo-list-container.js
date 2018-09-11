/**
 * Created by anokhin on 04.04.2018.
 */
import React from 'react';
import {connect} from 'react-redux';
import {todoStateSelector, todoActionCreatorsSelector} from '../selectors/todo-selectors';
import FormContainer from './form-container';
import TodoItem from '../components/todo-item';
import styles from './todo-list-container.css';

const TodoListContainer =({todos, removeTodo}) =>
    <div className={styles.list}>
        {
            todos.map((todo,i) =>
                <TodoItem key={i} todo={todo} removeTodo={removeTodo}/>
            )
        }
        <FormContainer/>
    </div>;


export default connect(todoStateSelector, todoActionCreatorsSelector)(TodoListContainer);