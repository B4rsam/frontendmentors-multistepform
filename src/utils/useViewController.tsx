import { useMemo, useState } from "react"

const useViewController = () => {
    const [step, setStep] = useState(1)
    const [services, setService] = useState({
        online: false,
        storage: false,
        profile: false,
    })
    const [plan, setPlan] = useState(0)
    const total = useMemo(() => {
        let x
        switch(plan) {
            case 0:
                x = 9
                break;
            case 1:
                x = 12
                break;
            case 2:
                x = 15
                break;
        }

        return x
    }, [services, plan])

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

    const handleService = (value : boolean, id : number) => {
        switch(id) {
            case 0:
                setService({
                    ...services,
                    online: value
                })
                break;
            case 1:
                setService({
                    ...services,
                    storage: value
                })
                break;
            case 2:
                setService({
                    ...services,
                    profile: value
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
        handleService,
        changeStep,
        handlePlan,
    }
}

export default useViewController