import style from '../ToDo/ToDo.module.scss'

export function ToDo({children}){
    return(
        <>
            <section className={style.sectionToDo}>
                {children}
            </section>
        </>
    )
}