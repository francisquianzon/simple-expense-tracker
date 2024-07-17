export enum CategoryList {
    FOOD = 'Food & Groceries',
    TRANSPORTATION = 'Transportation',
    SHOPPING = 'Shopping'
}
export type TExpenseData = {
    name: string;
    amount: number;
    category: CategoryList;
    description: string;
    date?: Date;
}

export const expensesData: TExpenseData[] = [
    {
        name: 'Knorr Sinigang',
        amount: 10,
        category: CategoryList.FOOD,
        description: 'This is a sample description',
    },
    {
        name: 'Diesel',
        amount: 20,
        category: CategoryList.TRANSPORTATION,
        description: 'This is a sample description',
    },
    {
        name: 'Stik-O',
        amount: 30,
        category: CategoryList.FOOD,
        description: 'This is a sample description',
    },
]