import { FC } from 'react'
import s from './formsection.module.sass'
import thanks from '../../assets/images/icon-thank-you.svg'
import arcade from '../../assets/images/icon-arcade.svg'
import advanced from '../../assets/images/icon-advanced.svg'
import pro from '../../assets/images/icon-pro.svg'
import FormInfo from '../formSectionSteps/formInfo/FormInfo'
import FormPlan from '../formSectionSteps/formPlan/FormPlan'
import FormAddon from '../formSectionSteps/formAddon/FormAddon'
import FormFinal from '../formSectionSteps/formFinal/FormFinal'
import FormSummary from '../formSectionSteps/formSummary/FormSummary'

interface formSection {
    userData: object
    step: number
    total: number
    services: any
    plan: number
    handleService: any
    changeStep: (where: number) => void 
    handlePlan: (selection : number) => void
}
const FormSection : FC<formSection> = ({step, plan, total, services, handlePlan, handleService, changeStep, userData}) => {

    const handleStep = () => {
        switch(step) {
            case 1:
                return (
                    <FormInfo userData={userData}/>
                )
            case 2:
                return (
                    <FormPlan plan={plan} handlePlan={handlePlan} arcade={arcade} advanced={advanced} pro={pro}/>
                )
            case 3:
                return (
                    <FormAddon services={services} handleService={handleService}/>
                )
            case 4:
                return (
                    <FormSummary services={services} plan={plan} total={total} changeStep={changeStep}/>
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