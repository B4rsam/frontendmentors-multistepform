import s from './forminfo.module.sass'
import Form from '../../primitives/Form/Form'

const FormInfo = () => {
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
}

export default FormInfo