import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { IdTokenResult } from "firebase/auth"

export interface Initial {
    tokenData?: IdTokenResult 
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
        clearTokenData(state) {
            return state = initialState;
        }
    }
})

export const { clearTokenData, setTokenData } = userSlice.actions
export default userSlice.reducer