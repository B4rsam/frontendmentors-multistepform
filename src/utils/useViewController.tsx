import { useMemo, useState } from "react"

const useViewController = () => {

    interface dataType {
        name: string | null
        email: string | null
        number: string | null
        plan: number | null
        online: boolean
        storage: boolean
        profile: boolean
    }
    let userData : dataType = {
        name: null,
        email: null,
        number: null,
        plan: null,
        online: false,
        storage: false,
        profile: false,
    }
    const [services, setService] = useState({
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
        if (services.online) {
            x = x + 1
        }
        if (services.storage) {
            x = x + 2
        }
        if (services.profile) {
            x = x + 2
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

    const writeToStorage = () => {
        window.localStorage.setItem("userData", JSON.stringify(userData))
        console.log(userData)
    }

    return {
        step,
        total,
        services,
        plan,
        userData,
        handleService,
        changeStep,
        handlePlan,
        writeToStorage
    }
}

export default useViewController