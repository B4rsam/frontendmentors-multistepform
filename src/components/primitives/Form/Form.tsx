import { FC } from 'react'
import s from './form.module.sass'

interface IForm {
    className: string
    type: string
    placeHolder: string
    onChange: any
    value?: string
}

const Form : FC<IForm> = ({className, type, placeHolder, onChange, value, ...other}) => {
    return (
        <input {...other} value={value} type={type} className={`${s.form} ${s[type]} ${className}`} placeholder={placeHolder} onChange={onChange}/>
    )
}

export default Form