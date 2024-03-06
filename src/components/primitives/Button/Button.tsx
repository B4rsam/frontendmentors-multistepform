import { FC, HTMLAttributes, ReactNode } from 'react'
import s from './button.module.sass'

interface IButton extends HTMLAttributes<HTMLButtonElement> {
    className?: string
    children: ReactNode
    type: any
}

const Button : FC<IButton> = ({className, type, children, ...other}) => {
    return (
        <button {...other} className={`${s.button} ${s[type]} ${className}`}>{children}</button>
    )
}

export default Button