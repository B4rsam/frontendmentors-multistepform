import { FC, HTMLAttributes, ReactNode } from 'react'
import s from './button.module.sass'

type validTypes = "submit" | "back" | "confirm" | "step" | "radio" | "checkbox"
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
    const handleType = () => {
        switch(type) {
            case "radio":
                return (
                    <label className={s.radioBody}>
                        <img src={radioImg}/>
                        <input type='radio' name="plans" className={`${s.button} ${s[type]}`} defaultChecked={defaultChecked}/>
                        <p className={s.radIOTitle}>{radioTitle}</p>
                        <p className={s.radioPrice}>{radioPrice}</p>
                    </label>
                ) 
            case "checkbox":
                return (
                    <input type="checkbox"/>
                )
            default:
                return <button {...other} className={`${s.button} ${s[type]} ${className}`}>{children}</button>
        }
    }
    return (
        <>
            {handleType()}
        </>
        
    )
}

export default Button