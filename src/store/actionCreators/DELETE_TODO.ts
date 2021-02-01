import DELETE_TODO from "../actions/DELETE_TODO";
import {IActionTypes} from "../../interfaces";

function delete_todo(value: number): IActionTypes {
    return {
        type: DELETE_TODO,
        value
    };
}

export default delete_todo;
