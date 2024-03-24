export type ResponseCategoriesType = {
    categories: CategoriesType[]
}

type CategoriesType = {
    id: number;
    category: string;
    subCategory: CategoriesType[]
}