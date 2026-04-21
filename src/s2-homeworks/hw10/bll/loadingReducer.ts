const initState = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: LoadingActionType): typeof initState => {
    switch (action.type) {
        case 'SET_LOADING':
            return { ...state, isLoading: action.isLoading }
        default:
            return state
    }
}

type LoadingActionType = ReturnType<typeof loadingAC>

export const loadingAC = (isLoading: boolean) => ({
    type: 'SET_LOADING' as const,
    isLoading,
})