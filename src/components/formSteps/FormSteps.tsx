import StepButton from '../primitives/stepButton/StepButton'
import s from './formsteps.module.sass'

const FormSteps = () => {
    return (
        <div className={s.formSteps}>
            <StepButton stepContent="content" step='1' stepLabel='Step 1'/>
            <StepButton stepContent="content" step='2' stepLabel='Step 2'/>
            <StepButton stepContent="content" step='3' stepLabel='Step 3'/>
            <StepButton stepContent="content" step='4' stepLabel='Step 4'/>
        </div>
    )
}

export default FormSteps