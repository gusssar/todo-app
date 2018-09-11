/**
 * Created by anokhin on 04.04.2018.
 */
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

export const actionTypes = {ADD_TODO, REMOVE_TODO};

function addTodo (todo) {
    return {type: ADD_TODO, todo};
}

function removeTodo (todo) {
    return {type: REMOVE_TODO, todo};
}

export const actionCreators ={addTodo, removeTodo};

export default function todoReducer (state=[], action) {
    switch (action.type) {
        case ADD_TODO:{
            const nextState = [...state];
            nextState.push(action.todo);
            return nextState;
        }
        case REMOVE_TODO:
            const nextState = [...state];
            for(let i = 0; i < nextState.length; ++i){
                if(nextState[i] == action.todo){
                    nextState.splice(i,1);
                }
            }
            return nextState;
        default:
            return state;
    }
}