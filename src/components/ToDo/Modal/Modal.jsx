import { useState } from 'react'
import style from '../Modal/Modal.module.scss'

export function Modal({action, addTask}) {

    const[inputValue, setInputValue] = useState('');

    function handleAddTask(e){
        e.preventDefault();
        if (inputValue.trim()) {
            addTask(inputValue);
            setInputValue('');
            action(false);
        }
    }

    return (
        <>
            <div className={style.containerModal}>
                <div className={style.modalContent}>
                    <h2>Create a Task</h2>
                    <form onSubmit={handleAddTask}>
                        <input type="text" placeholder='Enter Task' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                        <button type='submit'>Add Task</button>
                        <button onClick={() => action(false)}>Close</button>
                    </form>
                </div>
            </div>

        </>
    )
}