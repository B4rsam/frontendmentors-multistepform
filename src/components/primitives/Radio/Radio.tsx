import { FC } from 'react'
import s from './radio.module.sass'

interface IRadio {
    radioName: string
    className?: string
    img: string
    radioTitle: string
    radioPrice: string
    onClick: (selection : number) => void
    defaultChecked?: boolean
    plan?: number
    annual?: boolean
}
const Radio : FC<IRadio> = ({radioName, className, img, radioTitle, radioPrice, onClick, defaultChecked, annual, plan, ...other}) => {
    return (
        <label data-status={false} className={s.radioHolder}>
            <input {...other} onClick={onClick} type="radio" name={radioName} className={`${s.radioButton} ${className}`} defaultChecked={defaultChecked} />
            <div className={s.radioContent}>
                <img src={img}/>
                <p className={s.radioTitle}>{radioTitle}</p>
                <p className={s.radioPrice}>{radioPrice}</p>
                {annual ? <p className={s.annualMonth}>2 Months free</p> : null}
            </div>
        </label>
    )
}

export default Radio