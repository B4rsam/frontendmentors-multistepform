import { FC } from 'react'
import s from './checkbox.module.sass'

interface ICheckbox {
    title: string
    description: string
    price: string
    defaultChecked: boolean
    id: number
    formOperation: any
}

const Checkbox : FC<ICheckbox>= ({title, defaultChecked, description, price, id, formOperation, ...other}) => {

    return (
        <div className={s.holder}>
            <div className={s.rightSide}>
                <input defaultChecked={defaultChecked} type="checkbox" onChange={formOperation}/>
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