/**
 * Created by anokhin on 04.04.2018.
 */
import {actionCreators} from '../modules/todo-module';
import {bindActionCreators} from 'redux';


const {removeTodo, addTodo} = actionCreators;

export function todoStateSelector (state) {
    return {todos: state};
}

export function todoActionCreatorsSelector (dispatch) {
    return bindActionCreators({removeTodo,addTodo}, dispatch);
}