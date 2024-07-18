import { CategoryList } from "../constants";
import { TExpenseData } from "../types";

export const mockExpensesData: TExpenseData[] = [
    {
        name: 'Knorr Sinigang',
        amount: 10,
        category: CategoryList.Food,
        description: 'This is a sample description',
        id: 'jfuiegfvu2fgj'
    },
    {
        name: 'Diesel',
        amount: 20,
        category: CategoryList.Transportation,
        description: 'This is a sample description',
        id: 'fiwhhqufgsjqkfgqw'
    },
    {
        name: 'Stik-O',
        amount: 30,
        category: CategoryList.Food,
        description: 'This is a sample description',
        id: 'fjqeifghqsgf'
    },
]