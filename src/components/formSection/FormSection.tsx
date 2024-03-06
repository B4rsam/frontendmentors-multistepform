import { FC } from 'react'
import Form from '../primitives/Form/Form'
import s from './formsection.module.sass'
import Button from '../primitives/Button/Button'

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
                            <Button className={"arcade"} children="arcade" type="radio"/>
                            <Button className={"advanced"} children="arcade" type="radio"/>
                            <Button className={"pro"} children="arcade" type="radio"/>
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
                    <div className={s.formSection}>
                        <p className={s.title}>big thancc</p>
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