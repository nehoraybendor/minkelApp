import { z } from "zod";

export const genders = [
    "MALE",
    "FEMALE",
    "OTHER"
] as const


export const registerValidation = z.object({
    fullName: z.string().min(2).max(30).regex(/^[a-zA-Zא-ת ]*$/gm),
    gender: z.enum(genders),
    age: z.number().min(18).max(200),
    email: z.string().email(),
    password: z.string().min(6).max(16),
    confirmPassword: z.string().min(1),
}).refine(({ password, confirmPassword }) => password === confirmPassword,
    { message: "password dont match!", path: ["confirmPassword"] }
)

export type RegisterInput = z.infer<typeof registerValidation>

export const loginValidation = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(16),
})

export type LoginInput = z.infer<typeof loginValidation>