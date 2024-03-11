import { FC, HTMLAttributes, ReactNode } from 'react'
import s from './button.module.sass'

type validTypes = "submit" | "back" | "confirm" | "step"
interface IButton extends HTMLAttributes<HTMLButtonElement> {
    className?: string
    children?: ReactNode
    type: validTypes
    radioTitle?: string
    radioPrice?: string
    radioImg?: string
    defaultChecked? : boolean
}

const Button : FC<IButton> = ({className, type, children, radioTitle, radioPrice, radioImg, defaultChecked, ...other}) => {
    
    return (
        <button {...other} className={`${s.button} ${s[type]} ${className}`}>{children}</button>
    )
}

export default Button