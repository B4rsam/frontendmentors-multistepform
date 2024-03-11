import s from './toggle.module.sass'

const Toggle = ({...other}) => {
    return (
        <label className={s.toggleBox}>
            <input {...other} type="checkbox"/>
            <span className={s.toggleControl} />
        </label>
    )
}

export default Toggle