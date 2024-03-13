import { FC } from 'react'
import Button from '../primitives/Button/Button'
import s from './submitsection.module.sass'

interface submitSection {
    step: number
    changeStep: (where: number) => void
    writeToStorage: () => void
}

const SubmitSection : FC<submitSection>= ({step, changeStep, writeToStorage}) => {

    const handleSubmit = () => {
        changeStep(5)
        writeToStorage()
    }

    return (
        <div className={s.submitSection}>
            {step != 1 ? <Button type="back" children="Go Back" onClick={() => changeStep(step-1)} /> : null}
            <Button type="submit" children={step == 4 ? "Submit" : "Next Step"} onClick={step === 4 ? handleSubmit : () => changeStep(step+1)}/>
        </div>
    )
}

export default SubmitSection