import s from './formsummary.module.sass'
import Button from '../../primitives/Button/Button'
import { FC } from 'react'
import { dataObject } from '../../../utils/interface'

interface IFormSummary {
    data: dataObject
    total: number
    changeStep: (where: number) => void
}
const FormSummary : FC<IFormSummary>= ({data, total, changeStep}) => {
    return (
        <div className={s.formSection}>
            <p className={s.title}>Finishing up</p>
            <p className={s.description}>Double-check everything looks okay before confirming.</p>
            <div className={s.services}>
                <div className={s.planSection}>
                    { data.plan === 0 ? <div className={s.planDetails}>
                        <div className={s.options}>
                            <p className={s.planTitle}>Arcade{data.annual ? " (Annual)" : null}</p>
                            <Button type="summaryBack" children="Change" className={s.planChange} onClick={() => changeStep(2)}/>
                        </div>
                        <p className={s.planPrice}>{data.annual ? "$90/yr" : "$9/mo"}</p>
                    </div> : data.plan === 1 ? <div className={s.planDetails}> 
                        <div className={s.options}>
                                <p className={s.planTitle}>Advanced{data.annual ? " (Annual)" : null}</p>
                                <Button type="summaryBack" children="Change" className={s.planChange} onClick={() => changeStep(2)}/>
                            </div>
                            <p className={s.planPrice}>{data.annual ? "$120/yr" : "$12/mo"}</p>
                    </div> : data.plan === 2 ? <div className={s.planDetails}>
                        <div className={s.options}>
                                <p className={s.planTitle}>Pro{data.annual ? " (Annual)" : null}</p>
                                <Button type="summaryBack" children="Change" className={s.planChange} onClick={() => changeStep(2)}/>
                            </div>
                            <p className={s.planPrice}>{data.annual ? "$150/yr" : "$15/mo"}</p>
                    </div> : null}
                </div>
                <div className={s.addonSection}>
                    {data.online ? <div className={`${s.addon} ${s.addonOnline}`}>
                        <p className={s.addonTitle}>Online service</p>
                        <p className={s.addonPrice}>{data.annual ? "+$10/yr" : "+$1/mo"}</p>
                    </div> : null}
                    {data.storage ? <div className={`${s.addon} ${s.addonStorage}`}>
                        <p className={s.addonTitle}>Cloud Storage</p>
                        <p className={s.addonPrice}>{data.annual ? "+$20/yr" : "+$2/mo"}</p>
                    </div> : null}
                    {data.profile ? <div className={`${s.addon} ${s.addonProfile}`}>
                        <p className={s.addonTitle}>Profile Customization</p>
                        <p className={s.addonPrice}>{data.annual ? "+$20/yr" : "+$2/mo"}</p>
                    </div> : null}
                </div>
            </div>
            <div className={s.pricing}>
                <p className={s.priceDetails}>Total{data.annual ? " (per year)" : " (per month)"}</p>
                <p className={s.totalPrice}>{data.annual ? `+$${total}/yr` : `+$${total}/mo`}</p>
            </div>
        </div> 
    )
}

export default FormSummary