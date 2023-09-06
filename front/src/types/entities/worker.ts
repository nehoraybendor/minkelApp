import { z } from "zod";
import { DBEntity } from "./global";

export type WorkerEntity = z.infer<typeof WorkerSchema>

export const WorkerSchema = z.object({
    name: z.string().min(2).max(30).regex(/^[a-zA-Z ]*$/),
    email: z.string().email(),
    profil_url: z.string().min(3).max(5000),
    age: z.number().min(16).max(120),
    gender: z.string().min(2).max(15),
    phone_number: z.string(),
    address: z.string().min(3).max(150),
    salary: z.number().min(29.12).max(70000).optional(),
})

export interface workerFromDB extends WorkerEntity, DBEntity { }

