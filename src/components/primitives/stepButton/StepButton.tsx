import { FC } from 'react'
import Button from '../Button/Button'
import s from './stepbutton.module.sass'

interface stepButton {
    step: string
    stepLabel: string
    stepContent: string
}

const StepButton : FC<stepButton> = ({step, stepLabel, stepContent}) => {
    return (
        <label className={`${s.stepButton} ${step}`}>
            <label>{stepLabel}</label>
            <Button type="step" children={step}/>
            <p>{stepContent}</p>
        </label>
    )
}

export default StepButton