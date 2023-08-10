import { User } from "firebase/auth";
import type { createUserResponse, userInDB } from "../interfaces/user.api";
import { mainApi } from "./main.api";

export const userAPI = mainApi.injectEndpoints({
    endpoints: (build) => ({
        createUser: build.mutation<createUserResponse, userInDB>({
            query: (body) => ({
                url: "users/",
                body,
                method: "POST",
            })
        })
    })
});

export const { useCreateUserMutation } = userAPI