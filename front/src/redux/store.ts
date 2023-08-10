import { configureStore } from '@reduxjs/toolkit'
import { mainApi } from './API/main.api'
import userSlice from './slice/user.slice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
export const store = configureStore({
    reducer: {
        [mainApi.reducerPath]: mainApi.reducer,
        user: userSlice
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(mainApi.middleware)
    }
})

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector // for type compiltion on use selector 