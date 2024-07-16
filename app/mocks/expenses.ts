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
        name: 'sample name',
        amount: 10,
        category: CategoryList.FOOD,
        description: 'This is a sample description',
    },
    {
        name: 'sample name1',
        amount: 20,
        category: CategoryList.TRANSPORTATION,
        description: 'This is a sample description',
    },
    {
        name: 'sample name2',
        amount: 30,
        category: CategoryList.FOOD,
        description: 'This is a sample description',
    },
    {
        name: 'sample name',
        amount: 10,
        category: CategoryList.FOOD,
        description: 'This is a sample description',
    },
    {
        name: 'sample name1',
        amount: 20,
        category: CategoryList.TRANSPORTATION,
        description: 'This is a sample description',
    },
    {
        name: 'sample name2',
        amount: 30,
        category: CategoryList.FOOD,
        description: 'This is a sample description',
    },
    {
        name: 'sample name',
        amount: 10,
        category: CategoryList.FOOD,
        description: 'This is a sample description',
    },
    {
        name: 'sample name1',
        amount: 20,
        category: CategoryList.TRANSPORTATION,
        description: 'This is a sample description',
    },
    {
        name: 'sample name2',
        amount: 30,
        category: CategoryList.FOOD,
        description: 'This is a sample description',
    },
    {
        name: 'sample name',
        amount: 10,
        category: CategoryList.FOOD,
        description: 'This is a sample description',
    },
    {
        name: 'sample name1',
        amount: 20,
        category: CategoryList.TRANSPORTATION,
        description: 'This is a sample description',
    },
    {
        name: 'sample name2',
        amount: 30,
        category: CategoryList.FOOD,
        description: 'This is a sample description',
    },
    {
        name: 'sample name',
        amount: 10,
        category: CategoryList.FOOD,
        description: 'This is a sample description',
    },
    {
        name: 'sample name1',
        amount: 20,
        category: CategoryList.TRANSPORTATION,
        description: 'This is a sample description',
    },
    {
        name: 'sample name2',
        amount: 30,
        category: CategoryList.FOOD,
        description: 'This is a sample description',
    },
    {
        name: 'sample name',
        amount: 10,
        category: CategoryList.FOOD,
        description: 'This is a sample description',
    },
    {
        name: 'sample name1',
        amount: 20,
        category: CategoryList.TRANSPORTATION,
        description: 'This is a sample description',
    },
    {
        name: 'sample name2',
        amount: 30,
        category: CategoryList.FOOD,
        description: 'This is a sample description',
    },
]