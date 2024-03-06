import { FC } from 'react'
import Button from '../Button/Button'
import s from './stepbutton.module.sass'

type whereTo = 1 | 2 | 3 | 4
interface stepButton {
    step: whereTo
    stepLabel: string
    stepContent: string
    changeStep: (where : whereTo) => void
}

const StepButton : FC<stepButton> = ({step, stepLabel, stepContent, changeStep}) => {
    return (
        <label className={`${s.stepButton} ${step}`}>
            <label className={s.stepLabel}>{stepLabel}</label>
            <Button type="step" children={step} onClick={() => changeStep(step)}/>
            <p className={s.stepContent}>{stepContent}</p>
        </label>
    )
}

export default StepButton