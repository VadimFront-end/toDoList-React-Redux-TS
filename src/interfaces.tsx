import ADD_TODO from "./store/actions/ADD_TODO";
import CHANGE_TODO from "./store/actions/CHANGE_TODO";
import DELETE_TODO from "./store/actions/DELETE_TODO";
import CHANGE_STATUS_TODO from "./store/actions/CHANGE_STATUS_TODO.";

export interface taskItem {
    isCompleted: boolean
    name: string
    id: number
}

export interface state {
    todos: taskItem[]
    id: number
}


//interface for actions
interface IAdd_todo {
    type: typeof ADD_TODO
    value: string
}

interface IChange_todo_status {
    type: typeof CHANGE_STATUS_TODO
    value: number
}

interface IChange_todo {
    type: typeof CHANGE_TODO
    value: IChange_todo_value
}

export interface IChange_todo_value {
    newName: string
    taskId: number
}

interface IDelete_todo {
    type: typeof DELETE_TODO
    value: number
}

export type IActionTypes = IAdd_todo | IChange_todo | IDelete_todo | IChange_todo_status;
