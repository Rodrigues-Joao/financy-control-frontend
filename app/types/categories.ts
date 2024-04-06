export type ResponseCategoriesType = {
    categories: CategoriesType[]
}

export type CategoriesType = {
    id: number;
    category: string;
    categoryTypeId: number;
    subCategory: CategoriesType[]
}