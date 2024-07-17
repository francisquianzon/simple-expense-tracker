import { CategoryList } from "./constants";

export type TExpenseData = {
    name: string;
    amount: number;
    category: CategoryList;
    description: string;
    date?: string;
}

export type TExpenseDataContext = {
    data: TExpenseData[],
    setExpenseData: (expense: TExpenseData) => void;
    activeData?: TExpenseData;
    totalCash?: number;
}
