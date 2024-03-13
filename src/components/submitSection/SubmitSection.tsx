import { FC } from 'react'
import Button from '../primitives/Button/Button'
import s from './submitsection.module.sass'

interface ISubmitSection {
    step: number
    data: any
    changeStep: (where: number) => void
    writeToStorage: () => void
}

const SubmitSection : FC<ISubmitSection>= ({step, changeStep, writeToStorage, data}) => {

    const handleSubmit = () => {
        switch(step) {
            case 1:
                if (data.name === null || data.email === null || data.number === null) {
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