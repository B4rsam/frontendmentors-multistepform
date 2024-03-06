import { useState } from "react"

const useViewController = () => {
    const [step, setStep] = useState(1)

    const changeStep = (where : number) => {
        switch(where) {
            case 1:
                setStep(1)
                break;
            case 2:
                setStep(2)
                break;
            case 3:
                setStep(3)
                break;
            case 4:
                setStep(4)
                break;
            case 5:
                setStep(5)
                break;
        }
    }

    return {
        step,
        changeStep,
    }
}

export default useViewController