import s from './toggle.module.sass'

const Toggle = () => {
    return (
        <label className={s.toggleBox}>
            <input type="checkbox"/>
            <span className={s.toggleControl} />
        </label>
    )
}

export default Toggle