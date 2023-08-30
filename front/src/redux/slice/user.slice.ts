import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { IdTokenResult } from "firebase/auth"

export interface Initial {
    tokenData?: IdTokenResult 
    token?: string
}
const initialState: Initial = {
    tokenData: undefined
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setTokenData(state, { payload }: PayloadAction<IdTokenResult|undefined>) {
            state.tokenData = payload;
            return state;
        },
        clearToken(state) {
            return state = initialState;
        },
        setToken(state,{payload}:PayloadAction<string|undefined>){
             state.token = payload;
             return state
        }
    }
})

export const { clearToken, setTokenData,setToken } = userSlice.actions
export default userSlice.reducer