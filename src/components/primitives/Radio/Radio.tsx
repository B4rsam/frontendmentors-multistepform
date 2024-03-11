import { FC } from 'react'
import s from './radio.module.sass'

interface IRadio {
    radioName: string
    className?: string
    img: string
    radioTitle: string
    radioPrice: string
}
const Radio : FC<IRadio> = ({radioName, className, img, radioTitle, radioPrice, ...other}) => {
    return (
        <label data-status={false} className={s.radioHolder}>
            <input {...other} type="radio" name={radioName} className={`${s.radioButton} ${className}`} defaultChecked={false} />
            <div className={s.radioContent}>
                <img src={img}/>
                <p className={s.radioTitle}>{radioTitle}</p>
                <p className={s.radioPrice}>{radioPrice}</p>
            </div>
        </label>
    )
}

export default Radio