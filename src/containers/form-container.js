/**
 * Created by anokhin on 04.04.2018.
 */
import {todoStateSelector, todoActionCreatorsSelector} from '../selectors/todo-selectors';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import styles from './form-container.css';

@connect(todoStateSelector, todoActionCreatorsSelector)
export default class FormContainer extends  Component {

    onSubmit(e){
        e.preventDefault();
        if(!this.textarea) return;
        const todo = this.textarea.value;
        this.props.addTodo(todo);
        this.textarea.value = "";
    }

    render(){
        return  <div  className={styles.card} ref={c=>c&&(this.form=c)}>
            <textarea placeholder={'Ввести заголовок для этой карточки'} ref={c=>c&&(this.textarea=c)}/>
            <button className={styles.add} onClick={e=>this.onSubmit(e)}>Добавить карточку</button>
        </div>;
    }
}