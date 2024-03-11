import { FC } from 'react'
import s from './checkbox.module.sass'

interface ICheckbox {
    title: string
    description: string
    price: string
}

const Checkbox : FC<ICheckbox>= ({title, description, price, ...other}) => {
    return (
        <div className={s.holder}>
            <div className={s.rightSide}>
                <input {...other} type="checkbox"/>
                <div className={s.checkboxContent}>
                    <p className={s.title}>{title}</p>
                    <p className={s.description}>{description}</p>
                </div>    
            </div>
            <p className={s.price}>{price}</p>
        </div>
    )
}

export default Checkbox