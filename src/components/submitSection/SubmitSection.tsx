import { FC } from 'react'
import Button from '../primitives/Button/Button'
import s from './submitsection.module.sass'

interface submitSection {
    step: number
    userdata: any
    changeStep: (where: number) => void
    writeToStorage: () => void
}

const SubmitSection : FC<submitSection>= ({step, changeStep, writeToStorage, userData}) => {

    const handleSubmit = () => {
        switch(step) {
            case 1:
                if (userData.name === null || userData.email === null || userData.number === null) {
                    break;
                }
                else {
                    writeToStorage()
                    changeStep(2)
                    break;
                }
            case 4:
                changeStep(5)
                break;

            default:
                writeToStorage()
                changeStep(step+1)
        }
    }

    return (
        <div className={s.submitSection}>
            {step != 1 ? <Button type="back" children="Go Back" onClick={() => changeStep(step-1)} /> : null}
            <Button type="submit" children={step == 4 ? "Submit" : "Next Step"} onClick={handleSubmit}/>
        </div>
    )
}

export default SubmitSection