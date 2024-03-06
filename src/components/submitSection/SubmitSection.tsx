import Button from '../primitives/Button/Button'
import s from './submitsection.module.sass'

const SubmitSection = () => {
    return (
        <div className={s.submitSection}>
            <Button type="submit" children="Submit"/>
        </div>
    )
}

export default SubmitSection