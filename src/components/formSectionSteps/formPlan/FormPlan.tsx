import s from './formplan.module.sass'
import Radio from '../../primitives/Radio/Radio'
import Toggle from '../../primitives/Toggle/Toggle'
import { FC } from 'react'
import { dataActions, dataObject, validPlans } from '../../../utils/interface'

interface IFormPlan {
    formOperation: (plan: dataActions, selection?: validPlans) => void
    arcade: string
    advanced: string
    pro: string
    data: dataObject
}
const FormPlan : FC<IFormPlan> = ({formOperation, arcade, advanced, pro, data}) => {
    return (
        <div className={s.formSection}>
            <p className={s.title}>Select your plan</p>
            <p className={s.description}>You have the option of monthly or annual billing.</p>
            <div className={s.planButtons}>
                <Radio annual={data.annual} defaultChecked={data.plan === 0 ? true : false} radioName="plans" plan={data.plan} radioTitle='Arcade' radioPrice={data.annual ? "$90/yr" : "$9/mo"}img={arcade} onClick={() => formOperation("plan",0)}/>
                <Radio annual={data.annual} defaultChecked={data.plan === 1 ? true : false} radioName="plans" plan={data.plan} radioTitle='Advanced' radioPrice={data.annual ? "$120/yr" : "$12/mo"} img={advanced} onClick={() => formOperation("plan",1)}/>
                <Radio annual={data.annual} defaultChecked={data.plan === 2 ? true : false} radioName="plans" plan={data.plan} radioTitle='Pro' radioPrice={data.annual ? "$150/yr" : "$15/mo"} img={pro} onClick={() => formOperation("plan",2)}/>
            </div>
            <div className={s.billing}>
                <p>Monthly</p>
                <Toggle onChange={() => formOperation("annual")} defaultChecked={data.annual}/>
                <p>Annual</p>
            </div>
        </div> 
    )
}

export default FormPlan