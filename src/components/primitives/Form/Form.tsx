import { FC } from 'react'
import s from './form.module.sass'

interface IForm {
    className: string
    type: string
    placeHolder: string
    onChange: any
}

const Form : FC<IForm> = ({className, type, placeHolder, onChange, ...other}) => {
    return (
        <input {...other} type={type} className={`${s.form} ${s[type]} ${className}`} placeholder={placeHolder} onChange={onChange}/>
    )
}

export default Form