type ThemeStateType = {
    themeId: number
}

type ChangeThemeIdActionType = {
    type: string,
    id: number
}

type ActionsType = ChangeThemeIdActionType

const initState: ThemeStateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionsType): ThemeStateType => {
    switch (action.type) {
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdActionType => ({type: 'SET_THEME_ID', id})
