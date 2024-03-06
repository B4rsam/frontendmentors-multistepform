import { FC } from 'react'
import Button from '../primitives/Button/Button'
import s from './submitsection.module.sass'


type whereTo = 1 | 2 | 3 | 4
interface submitSection {
    step: number
    changeStep: (where: whereTo) => void
}

const SubmitSection : FC<submitSection>= ({step, changeStep}) => {
    return (
        <div className={s.submitSection}>
            {step != 1 ? <Button type="back" children="Go Back" onClick={() => changeStep(step-1)} /> : null}
            <Button type="submit" children={step == 4 ? "Submit" : "Next Step"} onClick={() => changeStep(step+1)}/>
        </div>
    )
}

export default SubmitSection