'use client';
import Header from './components/Header/Header';
import Expenses from './components/Expenses/Expenses';
import ExpenseDetails from './components/Details/ExpenseDetails';
import { createContext, useEffect, useState } from 'react';
import { TExpenseData } from './types';
import { sampleExpenseData } from './constants';
import { expensesData } from './mocks/expenses';

export const ExpenseDataContext = createContext(sampleExpenseData);

export default function Home() {
  const [expenseData, setExpenseData] = useState<TExpenseData[]>(expensesData); // Set initial data for testing/demo; remove if necessary
  const [activeExpenseData, setActiveExpenseData] = useState<string>('');

  const handleSetActiveExpense = (expenseId: string) => {
    setActiveExpenseData(expenseId);
  };

  const handleSetExpenseData = (expense: TExpenseData) => {
    setExpenseData((prev) => [...prev, expense]);
  };

  return (
    <ExpenseDataContext.Provider
      value={{
        data: expenseData,
        setExpenseData: handleSetExpenseData,
        activeDataId: activeExpenseData,
        setActiveExpenseData: handleSetActiveExpense,
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
