'use client';
import Header from './components/Header/Header';
import Expenses from './components/Expenses/Expenses';
import ExpenseDetails from './components/Details/ExpenseDetails';
import { createContext, useState } from 'react';
import { TExpenseData } from './types';
import { defaultExpenseData } from './constants';
import { mockExpensesData } from './mocks/expenses';

export const ExpenseDataContext = createContext(defaultExpenseData);

export default function Home() {
  const [expenseData, setExpenseData] = useState<TExpenseData[]>(mockExpensesData); // Set initial mock data for testing/demo; remove if necessary
  const [activeExpenseData, setActiveExpenseData] = useState<string>('');
  const [totalCash, setTotalCash] = useState<number>(0);

  const handleSetTotalCash = (value: number) => {
    setTotalCash(value);
  };

  const handleSetActiveExpense = (expenseId: string) => {
    setActiveExpenseData(expenseId);
  };

  const handleSetExpenseData = (expense: TExpenseData) => {
    setExpenseData((prev) => [...prev, expense]);
    setTotalCash((prev) => prev - expense.amount);
  };

  const handleDeleteExpenseData = (expenseId: string) => {
    let expenseAmount = 0;
    const updatedData = expenseData.filter((datum) => {
      if (datum.id === expenseId) expenseAmount = datum.amount;
      return datum.id !== expenseId;
    });
    setExpenseData(updatedData);
    setTotalCash((prev) => prev + expenseAmount);
  };

  return (
    <ExpenseDataContext.Provider
      value={{
        data: expenseData,
        totalCash,
        setExpenseData: handleSetExpenseData,
        activeDataId: activeExpenseData,
        setActiveExpenseData: handleSetActiveExpense,
        deleteExpenseData: handleDeleteExpenseData,
        setTotalCash: handleSetTotalCash,
      }}
    >
      <div className="flex h-screen flex-col p-8">
        <Header />
        <div className="flex h-full flex-row gap-2">
          <Expenses />
          <ExpenseDetails />
        </div>
      </div>
    </ExpenseDataContext.Provider>
  );
}
