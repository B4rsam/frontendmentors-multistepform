import { useState } from "react"

const useViewController = () => {
    const [step, setStep] = useState(1)
    const [total, setTotal] = useState(0)
    const [services, setService] = useState({
        online: false,
        storage: false,
        profile: false,
    })
    const [plan, setPlan] = useState(0)

    const calculate = () => {
        switch(plan) {
            case 0:
                setTotal(total + 9)
                break;
            case 1:
                setTotal(total + 12)
                break;
            case 2:
                setTotal(total + 15)
                break;
        }
    }

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
                calculate()
                break;
            case 5:
                setStep(5)
                break;
        }
    }

    const handleService = (value : boolean, index : number) => {
        switch(index) {
            case 0:
                setService({
                    ...services,
                    online: Boolean(value)
                })
                break;
            case 1:
                setService({
                    ...services,
                    storage: Boolean(value)
                })
                break;
            case 2:
                setService({
                    ...services,
                    profile: Boolean(value)
                })
                break;
        }
    }

    const handlePlan = (selection : number) => {
        setPlan(selection)
    }

    return {
        step,
        total,
        services,
        changeStep,
        handlePlan,
        handleService,
    }
}

export default useViewController