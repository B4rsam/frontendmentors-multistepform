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
}
const FormSection : FC<formSection> = ({step}) => {

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
                            <Radio radioName="plans" radioTitle='Arcade' radioPrice='$9/mo' img={arcade}/>
                            <Radio radioName="plans" radioTitle='Advanced' radioPrice='$9/mo' img={advanced}/>
                            <Radio radioName="plans" radioTitle='Pro' radioPrice='$9/mo' img={pro}/>
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
                        <Checkbox title="Online service" description='Access to online multiplayer games' price="+$1/mo"/>
                        <Checkbox title="Larger storage" description='Extra 1TB cloud storage space' price="+$2/mo"/>
                        <Checkbox title="Customizable profile" description='Custom profile theme' price="+$2/mo"/>
                    </div> 
                )
            case 4:
                return (
                    <div className={s.formSection}>
                        <p className={s.title}>Finishing up</p>
                        <p className={s.description}>Double-check everything looks okay before confirming.</p>
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