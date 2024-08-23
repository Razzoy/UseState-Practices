import { ToDoButton } from '../ToDoButton/ToDoButton'

export function AddedTask({ addedTask, index, deleteTask }) {
    return (
        <>
            <p>{addedTask}</p>
            <figure>
                <ToDoButton type='left'></ToDoButton>
                <ToDoButton type='minus' action={() =>{deleteTask(index)}}></ToDoButton>
                <ToDoButton type='right'></ToDoButton>
            </figure>
        </>
    )
}