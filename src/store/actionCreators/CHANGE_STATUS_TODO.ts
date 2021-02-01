import {IActionTypes} from "../../interfaces";

function change_status_todo(value: number): IActionTypes {
    return {
        type: 'CHANGE_STATUS_TODO',
        value
    };
}

export default change_status_todo;
