import { TExpenseData, TExpenseDataContext } from "./types";

export enum CategoryList {
    Food = 'Food & Groceries',
    Transportation = 'Transportation',
    Shopping = 'Shopping'
}

export const sampleExpenseData: TExpenseDataContext = {
    data: [],
    setExpenseData: () => {},
};