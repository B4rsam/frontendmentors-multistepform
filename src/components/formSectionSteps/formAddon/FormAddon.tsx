import s from './formaddon.module.sass'
import Checkbox from '../../primitives/Checkbox/Checkbox'
import { FC } from 'react'

interface IFormAddon {
    data: any
    handleService: any
}
const FormAddon : FC<IFormAddon>= ({data, handleService }) => {

    return (
        <div className={s.formSection}>
            <p className={s.title}>Pick add-ons</p>
            <p className={s.description}>addons help enhance the gaming experience.</p>
            <Checkbox defaultChecked={data.online} title="Online service" description='Access to online multiplayer games' price="+$1/mo" id={0} handleService={handleService}/>
            <Checkbox defaultChecked={data.storage} title="Larger storage" description='Extra 1TB cloud storage space' price="+$2/mo" id= {1} handleService={handleService}/>
            <Checkbox defaultChecked={data.profile} title="Customizable profile" description='Custom profile theme' price="+$2/mo" id={2} handleService={handleService}/>
        </div> 
    )
}

export default FormAddon