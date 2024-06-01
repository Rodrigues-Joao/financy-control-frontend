import { z } from "zod";

export type ResponseCategoriesType = {
    categories: CategoriesType[]
}

export type CategoriesType = {
    id: number;
    category: string;
    categoryTypeId: number;
    subCategory: CategoriesType[]
}

export const createCategorySchema = z.object( {
    category: z.string(),
    parentId: z.number().optional(),
    userId: z.number().optional(),
    categoryTypeId: z.number()
} )

export type CreateCategory = z.infer<typeof createCategorySchema>