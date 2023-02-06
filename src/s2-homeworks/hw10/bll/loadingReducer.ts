type StateType = {
    isLoading: boolean
}

const initState: StateType = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: ActionsType): StateType => {
    switch (action.type) {
        case "CHANGE_LOADING": {
            return {
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}

type ActionsType = LoadingActionType

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
