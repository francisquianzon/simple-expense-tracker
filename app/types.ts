import { CategoryList } from "./constants";

export type TExpenseData = {
    id: string;
    name: string;
    amount: number;
    category: CategoryList;
    description: string;
    date?: string;
}

export type TExpenseDataContext = {
    data: TExpenseData[],
    activeDataId?: string;
    totalCash?: number;
    setExpenseData: (expense: TExpenseData) => void;
    setActiveExpenseData: (expenseId: string) => void;
}
