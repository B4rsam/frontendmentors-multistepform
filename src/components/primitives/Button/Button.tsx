import { FC, HTMLAttributes, ReactNode } from 'react'
import s from './button.module.sass'

type validTypes = "submit" | "back" | "confirm" | "step" | "radio"
interface IButton extends HTMLAttributes<HTMLButtonElement> {
    className?: string
    children: ReactNode
    type: validTypes
}

const Button : FC<IButton> = ({className, type, children, ...other}) => {
    return (
        <button {...other} className={`${s.button} ${s[type]} ${className}`}>{children}</button>
    )
}

export default Button