import style from '../Modal.module.scss'
import { useState } from 'react'
export function ModalContent({action, addTask}) {

    const [inputValue, setInputValue] = useState('');

    function handleAddTask(e) {
        e.preventDefault();
        if (inputValue.trim()) {
            addTask(inputValue);
            setInputValue('');
            action(false);
        }
    }

    return (
        <>
                <h2>Create a Task</h2>
                <form onSubmit={handleAddTask}>
                    <input type="text" placeholder='Enter Task' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <button type='submit'>Add Task</button>
                    <button onClick={() => action(false)}>X</button>
                </form>
        </>
    )
}
