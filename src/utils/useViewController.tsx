import { useState } from "react"

type backFor = "next" | "back"

const useViewController = () => {
    const [step, setStep] = useState(1)

    const changeStep = (where : backFor) => {
        switch(where) {
            case "next":
                if (step != 5) {
                    setStep(step+1)
                }
                break;
            case "back":
                if (step != 1) {
                    setStep(step-1)
                }
                break;
        }
    }
}

export default useViewController