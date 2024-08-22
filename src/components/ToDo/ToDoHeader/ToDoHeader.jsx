import style from '../ToDo.module.scss'
import { ToDoButton } from '../ToDoButton/ToDoButton'

export function ToDoHeader() {
    return (
        <>
            <header className={style.headerToDo}>
                    <h1>To Do</h1>
                    <ToDoButton type='right'></ToDoButton>
            </header>
        </>
    )
}