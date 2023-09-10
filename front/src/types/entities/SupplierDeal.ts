import { z } from "zod";
import { DBEntity } from "./global";

export const supplierDealSchema = z.object({
    supplier_name: z.string().min(2).max(30),
    price: z.number().min(1).max(150000),
    product_name: z.string().min(2).max(150),
    amount: z.number().min(1).max(15000),
})

export type SupplierDealEntity = z.infer<typeof supplierDealSchema>

export interface SupplierDealFromDB extends SupplierDealEntity, DBEntity { }