import { FC } from 'react'
import thanks from '../../assets/images/icon-thank-you.svg'
import arcade from '../../assets/images/icon-arcade.svg'
import advanced from '../../assets/images/icon-advanced.svg'
import pro from '../../assets/images/icon-pro.svg'
import FormInfo from '../formSectionSteps/formInfo/FormInfo'
import FormPlan from '../formSectionSteps/formPlan/FormPlan'
import FormAddon from '../formSectionSteps/formAddon/FormAddon'
import FormFinal from '../formSectionSteps/formFinal/FormFinal'
import FormSummary from '../formSectionSteps/formSummary/FormSummary'
import { dataObject, validPlans, validSteps } from '../../utils/interface'

interface formSection {
    data: dataObject
    step: number
    total: number
    handleService: (e: any, id: number) => void
    changeStep: (where: validSteps) => void 
    handlePlan: (selection : validPlans) => void
    handleInput: (e: any, plan: number) => void
    handleAnnual: () => void
}
const FormSection : FC<formSection> = ({step, total, data, handlePlan, handleService, changeStep, handleInput, handleAnnual}) => {

    const handleStep = () => {
        switch(step) {
            case 1:
                return (
                    <FormInfo handleInput={handleInput} data={data}/>
                )
            case 2:
                return (
                    <FormPlan handlePlan={handlePlan} arcade={arcade} advanced={advanced} pro={pro} data={data} handleAnnual={handleAnnual}/>
                )
            case 3:
                return (
                    <FormAddon data={data} handleService={handleService} />
                )
            case 4:
                return (
                    <FormSummary data={data} total={total} changeStep={changeStep}/>
                )
            case 5:
                return (
                    <FormFinal thanks={thanks}/>
                )
        }
    }
    return (
        <>
            {handleStep()}
        </>
    )
}

export default FormSection