import { FC, HTMLAttributes, ReactNode } from 'react'
import s from './button.module.sass'
import arcade from '../../../assets/images/icon-arcade.svg'
import advanced from '../../../assets/images/icon-advanced.svg'
import pro from '../../../assets/images/icon-pro.svg'

type validTypes = "submit" | "back" | "confirm" | "step" | "radio"
interface IButton extends HTMLAttributes<HTMLButtonElement> {
    className?: string
    children?: ReactNode
    type: validTypes
    radioTitle?: string
    radioPrice?: string
    radioImg?: string
}

const Button : FC<IButton> = ({className, type, children, radioTitle, radioPrice, radioImg, ...other}) => {
    const handleType = () => {
        switch(type) {
            case "radio":
                return (
                    <label className={s.radioBody}>
                        <img src={radioImg}/>
                        <input type='radio' name="plans" className={`${s.button} ${s[type]}`} />
                        <p className={s.radIOTitle}>{radioTitle}</p>
                        <p className={s.radioPrice}>{radioPrice}</p>
                    </label>
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