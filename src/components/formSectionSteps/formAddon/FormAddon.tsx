import s from './formaddon.module.sass'
import Checkbox from '../../primitives/Checkbox/Checkbox'
import { FC } from 'react'
import { dataActions, dataObject } from '../../../utils/interface'

interface IFormAddon {
    data: dataObject
    formOperation: (action: dataActions, value?: undefined , args?: number) => void
}
const FormAddon : FC<IFormAddon>= ({data, formOperation }) => {

    return (
        <div className={s.formSection}>
            <p className={s.title}>Pick add-ons</p>
            <p className={s.description}>addons help enhance the gaming experience.</p>
            <Checkbox defaultChecked={data.online} title="Online service" description='Access to online multiplayer games' price={data.annual ? "+$10/yr" : "+$1/mo"} id={0} formOperation={() => formOperation("addon",undefined,1)}/>
            <Checkbox defaultChecked={data.storage} title="Larger storage" description='Extra 1TB cloud storage space' price={data.annual ? "+$20/yr" : "+$2/mo"} id= {1} formOperation={() => formOperation("addon",undefined,2)}/>
            <Checkbox defaultChecked={data.profile} title="Customizable profile" description='Custom profile theme' price={data.annual ? "+$20/yr" : "+$2/mo"} id={2} formOperation={() => formOperation("addon",undefined,3)}/>
        </div> 
    )
}

export default FormAddon