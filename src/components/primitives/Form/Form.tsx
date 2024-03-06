import { FC, HTMLAttributes } from 'react'
import s from './form.module.sass'

interface IForm extends HTMLAttributes<HTMLFormElement> {
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