import style from './Splitter.module.scss'

export function Splitter({ title }) {
    return (
        <>
            <div className={style.containerSplitter}>
                <h2>Opgave {title}</h2>
                <span></span>
            </div>
        </>
    )
}