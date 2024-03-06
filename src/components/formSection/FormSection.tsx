import Form from '../primitives/Form/Form'
import s from './formsection.module.sass'

const FormSection = (step : number) => {

    const handleStep = () => {
        switch(step) {
            case 1:
                return (
                    <div className={s.formSection}>
                        <p className={s.title}>Personal Info</p>
                        <p className={s.description}>Please enter your name, email address and phone number below:</p>
                        <p>Name</p>
                        <Form className={s.nameForm} type="textfield" placeHolder="John Doe"/>
                        <p>Email</p>
                        <Form className={s.nameForm} type="textfield" placeHolder="JohnDoe@gmail.com"/>
                        <p>Number</p>
                        <Form className={s.nameForm} type="textfield" placeHolder="+1 234 567 890"/>
                    </div> 
                )
            case 2:
                return (
                    <div className={s.formSection}>
                        <p className={s.title}>Personal Info</p>
                    </div> 
                )
            case 3:
                return (
                    <div className={s.formSection}>
                        <p className={s.title}>Personal Info</p>
                    </div> 
                )
            case 4:
                return (
                    <div className={s.formSection}>
                        <p className={s.title}>Personal Info</p>
                    </div> 
                )
            case 5:
                return (
                    <div className={s.formSection}>
                        <p className={s.title}>Personal Info</p>
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