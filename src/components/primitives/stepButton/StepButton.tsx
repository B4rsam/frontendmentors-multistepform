import { FC } from 'react'
import Button from '../Button/Button'
import s from './stepbutton.module.sass'

type whereTo = 1 | 2 | 3 | 4
interface stepButton {
    step: whereTo
    stepLabel: string
    stepContent: string
    currentStep: number
    changeStep: (where : whereTo) => void
}

const StepButton : FC<stepButton> = ({currentStep, step, stepLabel, stepContent, changeStep}) => {
    return (
        <label className={`${s.stepButton}`} >
            <Button type="step" children={step} onClick={() => changeStep(step)} className={`${step == currentStep ? `${s.buttonCurrent}` : null}`}/>
            <div className={s.textBox}>
                <label className={s.stepLabel}>{stepLabel}</label>
                <p className={s.stepContent}>{stepContent}</p>    
            </div>
        </label>
    )
}

export default StepButton