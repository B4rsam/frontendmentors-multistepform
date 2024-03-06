import { FC } from 'react'
import StepButton from '../primitives/stepButton/StepButton'
import s from './formsteps.module.sass'
type whereTo = 1 | 2 | 3 | 4
interface formSteps {
    changeStep: (where : whereTo) => void
}
const FormSteps : FC<formSteps>= ({changeStep}) => {
    return (
        <div className={s.formSteps}>
            <StepButton stepContent="content" step={1} stepLabel='Step 1' changeStep={changeStep}/>
            <StepButton stepContent="content" step={2} stepLabel='Step 2' changeStep={changeStep}/>
            <StepButton stepContent="content" step={3} stepLabel='Step 3' changeStep={changeStep}/>
            <StepButton stepContent="content" step={4} stepLabel='Step 4' changeStep={changeStep}/>
        </div>
    )
}

export default FormSteps