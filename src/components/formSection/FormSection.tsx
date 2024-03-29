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
import { dataObject, validSteps, dataActions } from '../../utils/interface'

interface formSection {
    data: dataObject
    step: number
    total: number
    changeStep: (where: validSteps) => void 
    formOperation: (action: dataActions, value?: any, args?: any) => void
}
const FormSection : FC<formSection> = ({step, total, data, changeStep, formOperation}) => {

    const handleStep = () => {
        switch(step) {
            case 1:
                return (
                    <FormInfo formOperation={formOperation} data={data}/>
                )
            case 2:
                return (
                    <FormPlan formOperation={formOperation} arcade={arcade} advanced={advanced} pro={pro} data={data}/>
                )
            case 3:
                return (
                    <FormAddon data={data} formOperation={formOperation} />
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