import { useState } from 'react'
import style from '../ToDo.module.scss'
import { ToDoButton } from '../ToDoButton/ToDoButton'
import { Modal } from '../Modal/Modal';
import { AddedTask } from '../AddedTask/AddedTask';

export function ToDoTask() {
    const [isOpen, SetIsOpen] = useState(false);
    const [tasks, setTasks] = useState([]);

    function addTask(task){
        setTasks([...tasks, task])
    }

    function deleteTask(index){
        let clone = [...tasks]
        clone.splice(index, 1);
        setTasks(clone);
    }

    return (
        <>
        <section className={style.sectionTasks}>
            <ToDoButton type='plus' action={() => SetIsOpen(true)}></ToDoButton>
            {isOpen == true && <Modal action={SetIsOpen} addTask={addTask}/>}
            <div className={style.containerTasks}>
            {tasks.map((task, index) => (
                    <AddedTask key={index} index={index} addedTask={task} deleteTask={deleteTask}/>
                ))}
            </div>
        </section>
        </>
    )
}