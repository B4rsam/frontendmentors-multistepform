import { useMemo, useState } from "react"
import { DATA_INITIAL_VALUE, validSteps } from "./interface"

const useViewController = () => {

    const numberRegex = /^09\d{9}/g

    const [data, setData] = useState(DATA_INITIAL_VALUE)
    const [step, setStep] = useState(1)

    const total = useMemo(() => {
        let x = 0
        if (!data.annual) {
            switch(data.plan) {
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
            if (data.online) {
                x = x + 1
            }
            if (data.storage) {
                x = x + 2
            }
            if (data.profile) {
                x = x + 2
            }
        }
        else {
            switch(data.plan) {
                case 0:
                    x = 90
                    break;
                case 1:
                    x = 120
                    break;
                case 2:
                    x = 150
                    break;
            }
            if (data.online) {
                x = x + 10
            }
            if (data.storage) {
                x = x + 20
            }
            if (data.profile) {
                x = x + 20
            }
        }
        return x
    }, [data])

    const changeStep = (where : validSteps) => {
        if (data.number && data.name && data.email) {
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
                default:
                    throw new Error("invalid step")
            }
            writeToStorage()    
        }
    }

    const handleService = (value : boolean, id : number) => {
        switch(id) {
            case 0:
                setData({
                    ...data,
                    online: value
                })
                break;
            case 1:
                setData({
                    ...data,
                    storage: value
                })
                break;
            case 2:
                setData({
                    ...data,
                    profile: value
                })
                break;
        }
    }

    const handleInput = (e : any, form : number) => {
        switch(form) {
            case 1:
                setData({
                    ...data,
                    name: e.target.value
                })
                break;
            case 2:
                setData({
                    ...data,
                    email: e.target.value
                })
                break;
            case 3:
                if (numberRegex.test(e.target.value)) {
                    setData({
                        ...data,
                        number: e.target.value
                    })
                }
                break;
        }
    }

    const handlePlan = (selection : 0 | 1 | 2) => {
        setData({
            ...data,
            plan: selection
        })
    }

    const handleAnnual = () => {
        setData({
            ...data,
            annual: !data.annual
        })
    }

    const writeToStorage = () => {
        window.localStorage.setItem("data", JSON.stringify(data))
    }

    return {
        step,
        total,
        data,
        handleService,
        changeStep,
        handlePlan,
        writeToStorage,
        handleInput,
        handleAnnual,
    }
}

export default useViewController