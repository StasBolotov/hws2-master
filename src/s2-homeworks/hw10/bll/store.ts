import { combineReducers, legacy_createStore } from 'redux'
import { loadingReducer } from './loadingReducer'

const rootReducer = combineReducers({
    loading: loadingReducer, // название поля 'loading' важно для useSelector в HW10.tsx
})

const store = legacy_createStore(rootReducer)

export default store

// Автоматическое определение типа всего состояния (AppStoreType)
export type AppStoreType = ReturnType<typeof rootReducer>

// Тип для диспатча (пригодится для типизации хуков в будущем)
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store // для возможности обращения к стору в консоли браузера