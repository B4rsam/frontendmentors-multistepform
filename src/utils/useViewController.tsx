import { useMemo, useState } from "react"

interface dataType {
    name: string | null
    email: string | null
    number: string | null
    plan: number | null
    online: boolean
    storage: boolean
    profile: boolean
}

const useViewController = () => {

    const [data, setData] = useState({
        name: null,
        email: null,
        number: null,
        plan: 0,
        online: false,
        storage: false,
        profile: false,
    })
    const [step, setStep] = useState(1)
    const [plan, setPlan] = useState(0)

    const total = useMemo(() => {
        let x = 0
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
        if (data.online) {
            x = x + 1
        }
        if (data.storage) {
            x = x + 2
        }
        if (data.profile) {
            x = x + 2
        }
        return x
    }, [data, plan])

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
        console.log(data)
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
                setData({
                    ...data,
                    number: e.target.value
                })
                break;
        }
        console.log(data)
    }

    const handlePlan = (selection : number) => {
        setPlan(selection)
    }

    const writeToStorage = () => {
        window.localStorage.setItem("data", JSON.stringify(data))
    }

    return {
        step,
        total,
        data,
        plan,
        handleService,
        changeStep,
        handlePlan,
        writeToStorage,
        handleInput,
    }
}

export default useViewController