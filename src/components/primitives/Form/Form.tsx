import { FC } from 'react'
import s from './form.module.sass'

interface IForm {
    className: string
    type: string
    placeHolder: string
}

const Form : FC<IForm> = ({className, type, placeHolder, ...other}) => {
    return (
        <input {...other} type={type} className={`${s.form} ${s[type]} ${className}`} />
    )
}

export default Form