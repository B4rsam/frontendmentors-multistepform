import { useMemo, useState } from "react"

const useViewController = () => {

    const numberRegex = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d*)\)?)[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?)+)(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i

    const [data, setData] = useState({
        name: null,
        email: null,
        number: null,
        plan: 0,
        annual: false,
        online: false,
        storage: false,
        profile: false,
    })
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

    const handlePlan = (selection : number) => {
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