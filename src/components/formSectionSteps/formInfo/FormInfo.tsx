import s from './forminfo.module.sass'
import Form from '../../primitives/Form/Form'
import { FC } from 'react'

interface IFormInfo {
    data: any
    handleInput: (e: any, plan: number) => void
}
const FormInfo : FC<IFormInfo>= ({handleInput, data}) => {

    return (
        <div className={s.formSection}>
            <p className={s.title}>Personal Info</p>
            <p className={s.description}>Please enter your name, email address and phone number below:</p>
            <p className={s.formLabel}>Name</p>
            <Form className={s.nameForm} type="textfield" placeHolder={data.name ? data.name : "John Doe"} onChange={(e : any) => handleInput(e,1)}/>
            <p className={s.formLabel}>Email</p>
            <Form className={s.nameForm} type="textfield" placeHolder={data.email ? data.email : "johndoe@gmail.com"} onChange={(e : any) => handleInput(e,2)}/>
            <p className={s.formLabel}>Number</p>
            <Form className={s.nameForm} type="textfield" placeHolder={data.number ? data.number : "+1 234 5678"} onChange={(e : any) => handleInput(e,3)}/>
        </div> 
    )
}

export default FormInfo