export function ToDoButton({type, action}){
    return (
        <>
        <button onClick={action}>
            <img src={`src/assets/${type}.svg`} alt={`${type}`} />
        </button>
        </>
    )
}