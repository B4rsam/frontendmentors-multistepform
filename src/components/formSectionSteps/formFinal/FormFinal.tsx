import { FC } from 'react'
import s from './formfinal.module.sass'

interface IFormFinal {
    thanks: string
}
const FormFinal : FC<IFormFinal>= ({thanks}) => {
    return (
        <div className={`${s.formSection} ${s.final}`}>
            <img src={thanks} className={s.tickPic}/>
            <p className={s.title}>Thank you!</p>
            <p className={s.thankYouText}>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
        </div> 
    )
}

export default FormFinal