import React, {useState} from 'react';
import './App.css';
import {taskItem} from './interfaces';
import {TaskItem} from "./components/taskItem";
import add_todo from "./store/actionCreators/ADD_TODO";
import change_todo from "./store/actionCreators/CHANGE_TODO";
import delete_todo from "./store/actionCreators/DELETE_TODO";
import {Dispatch} from "redux";
import change_status_todo from "./store/actionCreators/CHANGE_STATUS_TODO";

export type props = {
    todos: taskItem[],
    dispatch: Dispatch
}

const App = ({todos, dispatch}: props) => {
    console.log(todos)
    let [newTask, setNewTask] = useState<string>('');

    const addNewTask = () => {
        dispatch(add_todo(newTask));
        setNewTask('');
    }
    const onChange = (taskId: number, newName: string) => dispatch(change_todo({newName, taskId}));
    const onChangeStatus = (todoId: number)=> dispatch(change_status_todo(todoId));
    const deleteTask = (id: number) => dispatch(delete_todo(id));

    return (
        <div className="App">
            <div>
                <h1>Мои задачи</h1>
                <input type="text" value={newTask} onChange={e => setNewTask(e.target.value)}/>
                <button onClick={addNewTask}>Добавить</button>
                {
                    todos.map((val, index) => {
                        return (
                            <TaskItem
                                onChange={onChange}
                                onChangeStatus={onChangeStatus}
                                index={index}
                                task={val}
                                deleteTask={deleteTask}
                                key={val.id}/>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default App;
