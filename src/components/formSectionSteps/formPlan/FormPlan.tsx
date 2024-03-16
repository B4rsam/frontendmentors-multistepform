import s from './formplan.module.sass'
import Radio from '../../primitives/Radio/Radio'
import Toggle from '../../primitives/Toggle/Toggle'
import { FC } from 'react'

interface IFormPlan {
    handlePlan: (selection: number) => void
    handleAnnual: () => void
    plan: number
    arcade: string
    advanced: string
    pro: string
    data: any
}
const FormPlan : FC<IFormPlan> = ({handlePlan, handleAnnual, plan, arcade, advanced, pro, data}) => {
    return (
        <div className={s.formSection}>
            <p className={s.title}>Select your plan</p>
            <p className={s.description}>You have the option of monthly or annual billing.</p>
            <div className={s.planButtons}>
                <Radio annual={data.annual} defaultChecked={plan === 0 ? true : false} radioName="plans" plan={plan} radioTitle='Arcade' radioPrice={data.annual ? "$90/yr" : "$9/mo"}img={arcade} onClick={() => handlePlan(0)}/>
                <Radio annual={data.annual} defaultChecked={plan === 1 ? true : false} radioName="plans" plan={plan} radioTitle='Advanced' radioPrice={data.annual ? "$120/yr" : "$12/mo"} img={advanced} onClick={() => handlePlan(1)}/>
                <Radio annual={data.annual} defaultChecked={plan === 2 ? true : false} radioName="plans" plan={plan} radioTitle='Pro' radioPrice={data.annual ? "$150/yr" : "$15/mo"} img={pro} onClick={() => handlePlan(2)}/>
            </div>
            <div className={s.billing}>
                <p>Monthly</p>
                <Toggle onChange={handleAnnual} defaultChecked={data.annual}/>
                <p>Annual</p>
            </div>
        </div> 
    )
}

export default FormPlan