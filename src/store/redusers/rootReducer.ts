import initialState from "../initialState";
import {IActionTypes, state} from "../../interfaces";
import ADD_TODO from "../actions/ADD_TODO";
import CHANGE_TODO from "../actions/CHANGE_TODO";
import DELETE_TODO from "../actions/DELETE_TODO";
import CHANGE_STATUS_TODO from "../actions/CHANGE_STATUS_TODO.";

export default function reducer(state = initialState, action: IActionTypes): state {
    switch(action.type) {
        case ADD_TODO: return {
            ...state,
            todos: [
                ...state.todos, {
                    name: action.value,
                    isCompleted: false,
                    id: state.id
                }
            ],
            id: state.id + 1,
        }
        case CHANGE_TODO: return {
            ...state,
            todos: state.todos.map(val => {
                if(val.id === action.value.taskId)
                    val.name = action.value.newName;
                return val
            })
        }
        case DELETE_TODO: return {
            ...state,
            todos: state.todos.filter(val => val.id !== action.value)
        }
        case CHANGE_STATUS_TODO: return {
            ...state,
            todos: state.todos.map(val => {
                if(val.id === action.value)
                    val.isCompleted = !val.isCompleted;
                return val
            })
        }
        default: return state;
    }
}
