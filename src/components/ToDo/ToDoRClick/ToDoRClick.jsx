import style from '../ToDo.module.scss'

export function ToDoButtons() {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                className={style.arrowIcon}
                onClick={() => handleClick()}
                role="button"
                tabIndex="0"
            >
                <path d="M6 12H18M18 12L13 7M18 12L13 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
            </svg>
        </>
    )
}