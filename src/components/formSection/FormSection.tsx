import { FC } from 'react'
import Form from '../primitives/Form/Form'
import s from './formsection.module.sass'
import Button from '../primitives/Button/Button'
import thanks from '../../assets/images/icon-thank-you.svg'
import arcade from '../../assets/images/icon-arcade.svg'
import advanced from '../../assets/images/icon-advanced.svg'
import pro from '../../assets/images/icon-pro.svg'

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
                            <Button className={"arcade"} radioTitle="Arcade" radioPrice="$9/mo" type="radio" radioImg={arcade}/>
                            <Button className={"advanced"} radioTitle="Advanced" radioPrice="$12/mo" type="radio" radioImg={advanced}/>
                            <Button className={"pro"} radioTitle="Pro" radioPrice="$15/mo" type="radio" radioImg={pro}/>
                        </div>
                        <div className={s.billing}>
                            <p>plchlder</p>
                        </div>
                    </div> 
                )
            case 3:
                return (
                    <div className={s.formSection}>
                        <p className={s.title}>Pick add-ons</p>
                        <p className={s.description}>Addons help enhance the gaming experience.</p>
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