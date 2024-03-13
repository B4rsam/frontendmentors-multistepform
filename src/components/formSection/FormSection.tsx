import { FC } from 'react'
import Form from '../primitives/Form/Form'
import s from './formsection.module.sass'
import Radio from '../../components/primitives/Radio/Radio'
import thanks from '../../assets/images/icon-thank-you.svg'
import arcade from '../../assets/images/icon-arcade.svg'
import advanced from '../../assets/images/icon-advanced.svg'
import pro from '../../assets/images/icon-pro.svg'
import Toggle from '../primitives/Toggle/Toggle'
import Checkbox from '../primitives/Checkbox/Checkbox'
import Button from '../primitives/Button/Button'

interface formSection {
    step: number
    total: number
    services: any
    plan: number
    handleService: any
    changeStep: (where: number) => void 
    handlePlan: (selection : number) => void
}
const FormSection : FC<formSection> = ({step, plan, total, services, handlePlan, handleService, changeStep}) => {

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
                            <Radio radioName="plans" plan={plan} radioTitle='Arcade' radioPrice='$9/mo' img={arcade} onClick={() => handlePlan(0)}/>
                            <Radio radioName="plans" plan={plan} radioTitle='Advanced' radioPrice='$12/mo' img={advanced} onClick={() => handlePlan(1)}/>
                            <Radio radioName="plans" plan={plan} radioTitle='Pro' radioPrice='$15/mo' img={pro} onClick={() => handlePlan(2)}/>
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
                        <p className={s.description}>addons help enhance the gaming experience.</p>
                        <Checkbox defaultChecked={services.online} title="Online service" description='Access to online multiplayer games' price="+$1/mo" id={0} handleService={handleService}/>
                        <Checkbox defaultChecked={services.storage} title="Larger storage" description='Extra 1TB cloud storage space' price="+$2/mo" id= {1} handleService={handleService}/>
                        <Checkbox defaultChecked={services.profile} title="Customizable profile" description='Custom profile theme' price="+$2/mo" id={2} handleService={handleService}/>
                    </div> 
                )
            case 4:
                return (
                    <div className={s.formSection}>
                        <p className={s.title}>Finishing up</p>
                        <p className={s.description}>Double-check everything looks okay before confirming.</p>
                        <div className={s.services}>
                            <div className={s.planSection}>
                                { plan === 0 ? <div className={s.planDetails}>
                                    <div className={s.options}>
                                        <p className={s.planTitle}>Arcade</p>
                                        <Button type="summaryBack" children="Change" className={s.planChange} onClick={() => changeStep(2)}/>
                                    </div>
                                    <p className={s.planPrice}>$9/mo</p>
                                </div> : plan === 1 ? <div className={s.planDetails}> 
                                    <div className={s.options}>
                                            <p className={s.planTitle}>Advanced</p>
                                            <Button type="summaryBack" children="Change" className={s.planChange} onClick={() => changeStep(2)}/>
                                        </div>
                                        <p className={s.planPrice}>$12/mo</p>
                                </div> : plan === 2 ? <div className={s.planDetails}>
                                    <div className={s.options}>
                                            <p className={s.planTitle}>Pro</p>
                                            <Button type="summaryBack" children="Change" className={s.planChange} onClick={() => changeStep(2)}/>
                                        </div>
                                        <p className={s.planPrice}>$15/mo</p>
                                </div> : null}
                            </div>
                            <div className={s.addonSection}>
                                {services.online ? <div className={`${s.addon} ${s.addonOnline}`}>
                                    <p className={s.addonTitle}>Online service</p>
                                    <p className={s.addonPrice}>+$1/mo</p>
                                </div> : null}
                                {services.storage ? <div className={`${s.addon} ${s.addonStorage}`}>
                                    <p className={s.addonTitle}>Cloud Storage</p>
                                    <p className={s.addonPrice}>+$2/mo</p>
                                </div> : null}
                                {services.profile ? <div className={`${s.addon} ${s.addonProfile}`}>
                                    <p className={s.addonTitle}>Profile Customization</p>
                                    <p className={s.addonPrice}>+$2/mo</p>
                                </div> : null}
                            </div>
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