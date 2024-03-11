import { FC } from 'react'
import s from './checkbox.module.sass'

interface ICheckbox {
    title: string
    description: string
    price: string
    defaultChecked: boolean
    onChange: (e : any) => void
}

const Checkbox : FC<ICheckbox>= ({title, defaultChecked, description, price, onChange, ...other}) => {
    return (
        <div className={s.holder}>
            <div className={s.rightSide}>
                <input defaultChecked={defaultChecked} onChange={onChange} type="checkbox"/>
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