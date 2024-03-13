import { FC } from 'react'
import s from './formsection.module.sass'
import Radio from '../../components/primitives/Radio/Radio'
import thanks from '../../assets/images/icon-thank-you.svg'
import arcade from '../../assets/images/icon-arcade.svg'
import advanced from '../../assets/images/icon-advanced.svg'
import pro from '../../assets/images/icon-pro.svg'
import Toggle from '../primitives/Toggle/Toggle'
import Checkbox from '../primitives/Checkbox/Checkbox'
import Button from '../primitives/Button/Button'
import FormInfo from '../formSectionSteps/formInfo/FormInfo'
import FormPlan from '../formSectionSteps/formPlan/FormPlan'
import FormAddon from '../formSectionSteps/formAddon/FormAddon'

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
                    <FormInfo />
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