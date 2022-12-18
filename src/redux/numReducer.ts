const initialState: number | string = 0

export const numReducer = (state: number | string = initialState, action: ActionType): number | string => {
    switch (action.type) {
        case 'CHANGE-NUM':
            return action.payload.value
        default:
            return state
    }
}

type ActionType = ReturnType<typeof changeNumToNumberAC>

export const changeNumToNumberAC = (value: number | string) => {
    return {
        type: 'CHANGE-NUM',
        payload: {
            value
        }
    } as const
}