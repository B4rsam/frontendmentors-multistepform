import s from './formplan.module.sass'
import Radio from '../../primitives/Radio/Radio'
import Toggle from '../../primitives/Toggle/Toggle'
import { FC } from 'react'

interface IFormPlan {
    handlePlan: (selection: number) => void
    plan: number
    arcade: string
    advanced: string
    pro: string
}
const FormPlan : FC<IFormPlan> = ({handlePlan, plan, arcade, advanced, pro}) => {
    return (
        <div className={s.formSection}>
            <p className={s.title}>Select your plan</p>
            <p className={s.description}>You have the option of monthly or annual billing.</p>
            <div className={s.planButtons}>
                <Radio defaultChecked={plan === 0 ? true : false} radioName="plans" plan={plan} radioTitle='Arcade' radioPrice='$9/mo' img={arcade} onClick={() => handlePlan(0)}/>
                <Radio defaultChecked={plan === 1 ? true : false} radioName="plans" plan={plan} radioTitle='Advanced' radioPrice='$12/mo' img={advanced} onClick={() => handlePlan(1)}/>
                <Radio defaultChecked={plan === 2 ? true : false} radioName="plans" plan={plan} radioTitle='Pro' radioPrice='$15/mo' img={pro} onClick={() => handlePlan(2)}/>
            </div>
            <div className={s.billing}>
                <p>Monthly</p>
                <Toggle />
                <p>Annual</p>
            </div>
        </div> 
    )
}

export default FormPlan