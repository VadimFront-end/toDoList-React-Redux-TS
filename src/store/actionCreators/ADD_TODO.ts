import ADD_TODO from '../actions/ADD_TODO'
import {IActionTypes} from "../../interfaces";

function add_todo(value: string): IActionTypes {
    return {
        type: ADD_TODO,
        value
    };
}

export default add_todo;
