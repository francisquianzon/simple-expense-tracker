import { TExpenseDataContext } from "./types";

export enum CategoryList {
    Food = 'Food & Groceries',
    Transportation = 'Transportation',
    Shopping = 'Shopping'
}

export const defaultExpenseData: TExpenseDataContext = {
    data: [],
    activeDataId: "",
    totalCash: 0,
    setExpenseData: () => { },
    setActiveExpenseData: () => { },
    deleteExpenseData: () => { },
    setTotalCash: () => {}
};