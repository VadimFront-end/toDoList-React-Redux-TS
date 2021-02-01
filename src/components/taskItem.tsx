import React, {useState} from 'react';
import {taskItem} from "../interfaces";
import '../index.css';

type props = {
    task: taskItem,
    index: number,
    deleteTask(id: number): void,
    onChange(taskId: number, newName: string): void,
    onChangeStatus(taskId: number): void
}

const cursor = {
    cursor: 'pointer'
}

export const TaskItem = ({task, index, deleteTask, onChange, onChangeStatus} : props) => {
    const [isChanging, setIsChanging] = useState(true);
    return (
        <div className="task-item">
            <div>{1 + index} -</div>
            <input type="checkbox" onChange={() => onChangeStatus(task.id)} checked={task.isCompleted}/>
            <input value={task.name} onChange={e => onChange(task.id, e.target.value)} disabled={isChanging}/>
            <div onClick={() => setIsChanging(!isChanging)} style={cursor}>&#9999;</div>
            <div style={cursor} onClick={() => deleteTask(task.id)}>&#9746;</div>
        </div>
    );
}

