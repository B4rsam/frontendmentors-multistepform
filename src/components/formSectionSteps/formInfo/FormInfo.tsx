import s from './forminfo.module.sass'
import Form from '../../primitives/Form/Form'
import { FC } from 'react'
import { dataActions, dataObject } from '../../../utils/interface'

interface IFormInfo {
    data: dataObject
    formOperation: (action: dataActions, value: any, ...args: any) => void
}
const FormInfo : FC<IFormInfo>= ({formOperation, data}) => {

    return (
        <div className={s.formSection}>
            <p className={s.title}>Personal Info</p>
            <p className={s.description}>Please enter your nam"info",e.target.value, email address and phone number below:</p>
            <p className={s.formLabel}>Name</p>
            <Form className={s.nameForm} type="textfield" placeHolder={"John Doe"} onChange={(e : any) => formOperation("info",e.target.value,1)}/>
            <p className={s.formLabel}>Email</p>
            <Form className={s.nameForm} type="textfield" placeHolder={"johndoe@gmail.com"} onChange={(e : any) => formOperation("info",e.target.value,2)}/>
            <p className={s.formLabel}>Number</p>
            <Form className={s.nameForm} type="textfield" placeHolder={data.number ? String(data.number) : "+1 234 5678"} onChange={(e : any) => formOperation("info",e.target.value,3)}/>
        </div> 
    )
}

export default FormInfo
