import { combineReducers, legacy_createStore } from 'redux'
import { loadingReducer } from './loadingReducer'
import { themeReducer } from '../../hw12/bll/themeReducer' // 1. Добавь импорт

const rootReducer = combineReducers({
    loading: loadingReducer, // Сохраняем для HW10
    theme: themeReducer,     // 2. Добавляем для HW12
})

const store = legacy_createStore(rootReducer)

export default store

// Автоматически обновит тип, теперь AppStoreType будет содержать и loading, и theme
export type AppStoreType = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store