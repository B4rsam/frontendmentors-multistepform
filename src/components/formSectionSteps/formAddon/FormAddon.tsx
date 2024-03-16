import s from './formaddon.module.sass'
import Checkbox from '../../primitives/Checkbox/Checkbox'
import { FC } from 'react'
import { dataObject } from '../../../utils/interface'

interface IFormAddon {
    data: dataObject
    handleService: (value: boolean, id: number) => void
}
const FormAddon : FC<IFormAddon>= ({data, handleService }) => {

    return (
        <div className={s.formSection}>
            <p className={s.title}>Pick add-ons</p>
            <p className={s.description}>addons help enhance the gaming experience.</p>
            <Checkbox defaultChecked={data.online} title="Online service" description='Access to online multiplayer games' price={data.annual ? "+$10/yr" : "+$1/mo"} id={0} handleService={(e : any) => handleService(e.target.checked,0)}/>
            <Checkbox defaultChecked={data.storage} title="Larger storage" description='Extra 1TB cloud storage space' price={data.annual ? "+$20/yr" : "+$2/mo"} id= {1} handleService={(e : any) => handleService(e.target.checked,1)}/>
            <Checkbox defaultChecked={data.profile} title="Customizable profile" description='Custom profile theme' price={data.annual ? "+$20/yr" : "+$2/mo"} id={2} handleService={(e : any) => handleService(e.target.checked,2)}/>
        </div> 
    )
}

export default FormAddon