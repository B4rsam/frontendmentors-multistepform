export interface dataObject {
    name: string | null
    email: string | null
    number: number | null
    plan: 0 | 1 | 2
    annual: boolean
    online: boolean
    storage: boolean
    profile: boolean
}

export type validSteps = 1 | 2 | 3 | 4 | 5
export type validPlans = 0 | 1 | 2
export type validAddons = 1 | 2 | 3

const DATA_INITIAL_VALUE : dataObject= {
    name: null,
    email: null,
    number: null,
    plan: 0,
    annual: false,
    online: false,
    storage: false,
    profile: false,
}

export {DATA_INITIAL_VALUE}