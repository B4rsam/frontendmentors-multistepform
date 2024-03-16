import { FC } from 'react'
import Button from '../primitives/Button/Button'
import s from './submitsection.module.sass'
import { validSteps } from '../../utils/interface'

interface ISubmitSection {
    step: number
    changeStep: (where: validSteps) => void
}

const SubmitSection : FC<ISubmitSection>= ({step, changeStep}) => {

    const handleSubmit = () => {
        changeStep(step+1)
    }

    return (
        <div className={s.submitSection}>
            {step != 1 ? <Button type="back" children="Go Back" onClick={() => changeStep(step-1)} /> : null}
            <Button type="submit" children={step == 4 ? "Submit" : "Next Step"} onClick={handleSubmit}/>
        </div>
    )
}

export default SubmitSection