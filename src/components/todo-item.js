/**
 * Created by anokhin on 04.04.2018.
 */
import React from 'react';
import styles from './todo-item.css';

export default  ({todo, removeTodo, index}) =>
    <div className={styles.card}>
        <p>{todo}</p>
        <button  className={styles.remove} onClick={ () => removeTodo(todo) }>REMOVE</button>
    </div>;