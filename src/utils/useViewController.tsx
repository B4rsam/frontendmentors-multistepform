import { useEffect, useMemo, useState } from "react"
import { DATA_INITIAL_VALUE, validPlans, dataActions} from "./interface"



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

    const changeStep = (where : number) => {
        if (data.number && data.name && data.email) {
            if ([1,2,3,4,5].includes(where)) {
                setStep(where)
            }
            else {
                throw Error("Invalid step")
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

    const writeToStorage = () => {
        localStorage.setItem("data", JSON.stringify(data))
    }

    const formOperation = (action: dataActions, value: any, args?: any) => {
        switch(action) {
            case "info":
                switch(args) {
                    case 1:
                        setData({
                            ...data,
                            name: value
                        })
                        break;
                    case 2:
                        setData({
                            ...data,
                            email: value
                        })
                        break;

                    case 3:
                        if (numberRegex.test(value)) {
                            setData({
                                ...data,
                                number: value
                            })    
                        }
                        break;
                }
                break;
            case "plan":
                setData({
                    ...data,
                    plan: value
                })
                break;
            case "annual":
                setData({
                    ...data,
                    annual: !data.annual
                })
                break;
            case "addon":
                switch(args.addon) {
                    case 1:
                        setData({
                            ...data,
                            online: value
                        })
                        break;
                    case 2:
                        setData({
                            ...data,
                            storage: value
                        })
                        break;
                    case 3:
                        setData({
                            ...data,
                            profile: value
                        })
                        break;
                }
                break;
            default:
                throw Error("Invalid action")
        }
    }

    useEffect(() => {
        if (localStorage.getItem("data")) {
            setData(JSON.parse(String(localStorage.getItem("data"))))    
        }
    }, [])

    return {
        step,
        total,
        data,
        formOperation,
        handleService,
        changeStep,
        writeToStorage,
    }
}

export default useViewController