import { z } from "zod";
import { DBEntity } from "./global";

export const ClientDealSchema = z.object({
    price: z.number().min(1).max(999999),
    product_name: z.string().min(2).max(150),
    amount: z.number().min(1).max(15000),
})

export type ClientDealEntity = z.infer<typeof ClientDealSchema>

export interface ClientDealFromDB extends ClientDealEntity, DBEntity { }