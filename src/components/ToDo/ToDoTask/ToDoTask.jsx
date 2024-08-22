import { useState } from 'react'
import style from '../ToDo.module.scss'
import { ToDoButton } from '../ToDoButton/ToDoButton'

export function ToDoTask() {

    const [task, setTask] = useState({});

    function addTask(){
        console.log('it works');
        setTask(task);
        
        
    }
    return (
        <>
        <section>
            <ToDoButton type='plus' action={addTask}></ToDoButton>
        </section>
        </>
    )
}