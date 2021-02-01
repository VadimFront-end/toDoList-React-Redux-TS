import CHANGE_TODO from "../actions/CHANGE_TODO";
import {IActionTypes, IChange_todo_value} from "../../interfaces";

function change_todo(value: IChange_todo_value): IActionTypes {
    return {
        type: CHANGE_TODO,
        value
    };
}

export default change_todo;
