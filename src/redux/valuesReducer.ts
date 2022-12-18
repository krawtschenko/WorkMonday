export type ValuesType = {
    minValue: number
    maxValue: number
}

const initialState: ValuesType = {
    minValue: 0,
    maxValue: 5
}

export const valuesReducer = (state: ValuesType = initialState, action: ActionType): ValuesType => {
    switch (action.type) {
        case 'CHANGE-MIN-VALUE':
            return {...state, minValue: action.payload.value}
        case 'CHANGE-MAX-VALUE':
            return {...state, maxValue: action.payload.value}
        default:
            return state
    }
}

type ActionType = ReturnType<typeof changeMinValueAC> | ReturnType<typeof changeMaxValueAC>

export const changeMinValueAC = (value: number) => {
    return {
        type: 'CHANGE-MIN-VALUE',
        payload: {
            value
        }
    } as const
}

export const changeMaxValueAC = (value: number) => {
    return {
        type: 'CHANGE-MAX-VALUE',
        payload: {
            value
        }
    } as const
}