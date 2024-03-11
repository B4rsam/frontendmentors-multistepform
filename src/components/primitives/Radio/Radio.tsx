import { FC } from 'react'
import s from './radio.module.sass'

interface IRadio {
    radioName: string
    className?: string
    img: string
    radioTitle: string
    radioPrice: string
    onClick: (selection : number) => void
}
const Radio : FC<IRadio> = ({radioName, className, img, radioTitle, radioPrice, onClick, ...other}) => {
    return (
        <label data-status={false} className={s.radioHolder}>
            <input {...other} onClick={onClick} type="radio" name={radioName} className={`${s.radioButton} ${className}`} defaultChecked={false} />
            <div className={s.radioContent}>
                <img src={img}/>
                <p className={s.radioTitle}>{radioTitle}</p>
                <p className={s.radioPrice}>{radioPrice}</p>
            </div>
        </label>
    )
}

export default Radio