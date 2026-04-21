const initialState = {
    themeId: 1,
}

type StateType = typeof initialState

export const themeReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.id
            }
        default:
            return state
    }
}

type ActionType = ReturnType<typeof changeThemeId>

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const)