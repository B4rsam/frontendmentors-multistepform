import { FC } from 'react'
import StepButton from '../primitives/stepButton/StepButton'
import s from './formsteps.module.sass'
type whereTo = 1 | 2 | 3 | 4
interface formSteps {
    step: number
    changeStep: (where : whereTo) => void
}
const FormSteps : FC<formSteps>= ({changeStep, step}) => {
    return (
        <div className={s.formSteps}>
            <StepButton currentStep={step} stepContent="YOUR INFO" step={1} stepLabel='STEP 1' changeStep={changeStep}/>
            <StepButton currentStep={step} stepContent="SELECT PLAN" step={2} stepLabel='STEP 2' changeStep={changeStep}/>
            <StepButton currentStep={step} stepContent="ADD-ONS" step={3} stepLabel='STEP 3' changeStep={changeStep}/>
            <StepButton currentStep={step} stepContent="SUMMARY" step={4} stepLabel='STEP 4' changeStep={changeStep}/>
        </div>
    )
}

export default FormSteps