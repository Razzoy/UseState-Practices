import style from '../ToDo.module.scss'
import { ToDoButton } from '../ToDoButton/ToDoButton'

export function ToDoHeader({title}) {
    return (
        <>
            <header className={style.headerToDo}>
                    <h1>{title}</h1>
                    <ToDoButton type='right'></ToDoButton>
            </header>
        </>
    )
}