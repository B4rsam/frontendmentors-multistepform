import { FC } from 'react'
import Form from '../primitives/Form/Form'
import s from './formsection.module.sass'
import Radio from '../primitives/Radio/Radio'
import thanks from '../../assets/images/icon-thank-you.svg'
import arcade from '../../assets/images/icon-arcade.svg'
import advanced from '../../assets/images/icon-advanced.svg'
import pro from '../../assets/images/icon-pro.svg'
import Toggle from '../primitives/Toggle/Toggle'
import Checkbox from '../primitives/Checkbox/Checkbox'

interface formSection {
    step: number
    total: number
    services: any
    handlePlan: (selection : number) => void
    handleService: (value : boolean, index : number) => void
}
const FormSection : FC<formSection> = ({step, total, services, handlePlan, handleService}) => {

    const serviceChange = (val : number, e: any) => {
        handleService(e.target.value, val)
    }

    const handleStep = () => {
        switch(step) {
            case 1:
                return (
                    <div className={s.formSection}>
                        <p className={s.title}>Personal Info</p>
                        <p className={s.description}>Please enter your name, email address and phone number below:</p>
                        <p className={s.formLabel}>Name</p>
                        <Form className={s.nameForm} type="textfield" placeHolder="John Doe"/>
                        <p className={s.formLabel}>Email</p>
                        <Form className={s.nameForm} type="textfield" placeHolder="JohnDoe@gmail.com"/>
                        <p className={s.formLabel}>Number</p>
                        <Form className={s.nameForm} type="textfield" placeHolder="+1 234 567 890"/>
                    </div> 
                )
            case 2:
                return (
                    <div className={s.formSection}>
                        <p className={s.title}>Select your plan</p>
                        <p className={s.description}>You have the option of monthly or annual billing.</p>
                        <div className={s.planButtons}>
                            <Radio radioName="plans" radioTitle='Arcade' radioPrice='$9/mo' img={arcade} onClick={() => handlePlan(0)}/>
                            <Radio radioName="plans" radioTitle='Advanced' radioPrice='$9/mo' img={advanced} onClick={() => handlePlan(1)}/>
                            <Radio radioName="plans" radioTitle='Pro' radioPrice='$9/mo' img={pro} onClick={() => handlePlan(2)}/>
                        </div>
                        <div className={s.billing}>
                            <p>Monthly</p>
                            <Toggle />
                            <p>Annual</p>
                        </div>
                    </div> 
                )
            case 3:
                return (
                    <div className={s.formSection}>
                        <p className={s.title}>Pick add-ons</p>
                        <p className={s.description}>Addons help enhance the gaming experience.</p>
                        <Checkbox defaultChecked={Boolean(services.online)} title="Online service" description='Access to online multiplayer games' price="+$1/mo" onChange={(e) => serviceChange(0,e)}/>
                        <Checkbox defaultChecked={Boolean(services.storage)} title="Larger storage" description='Extra 1TB cloud storage space' price="+$2/mo" onChange={(e) => serviceChange(1,e)}/>
                        <Checkbox defaultChecked={Boolean(services.profile)} title="Customizable profile" description='Custom profile theme' price="+$2/mo" onChange={(e) => serviceChange(2,e)}/>
                    </div> 
                )
            case 4:
                return (
                    <div className={s.formSection}>
                        <p className={s.title}>Finishing up</p>
                        <p className={s.description}>Double-check everything looks okay before confirming.</p>
                        <div className={s.services}>

                        </div>
                        <div className={s.pricing}>
                            <p className={s.priceDetails}>Total (per month)</p>
                            <p className={s.totalPrice}>{`+$${total}/mo`}</p>
                        </div>
                    </div> 
                )
            case 5:
                return (
                    <div className={`${s.formSection} ${s.final}`}>
                        <img src={thanks} className={s.tickPic}/>
                        <p className={s.title}>Thank you!</p>
                        <p className={s.thankYouText}>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
                    </div> 
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