"use client";
import Header from "./components/Header/Header";
import Expenses from "./components/Expenses/Expenses";
import ExpenseDetails from "./components/Details/ExpenseDetails";
import { createContext, useState } from "react";
import { TExpenseData } from "./types";
import { CategoryList, sampleExpenseData } from "./constants";

export const ExpenseDataContext = createContext(sampleExpenseData);

export default function Home() {
  const [expenseData, setExpenseData] = useState<TExpenseData[]>([]);
  const handleSetExpenseData = (expense: TExpenseData) => {
    setExpenseData((prev) => [...prev, expense]);
  };
  return (
    <ExpenseDataContext.Provider
      value={{ data: expenseData, setExpenseData: handleSetExpenseData }}
    >
      <div className="flex h-screen flex-col p-8">
        <Header />
        <div className="flex h-full flex-row">
          <Expenses />
          <ExpenseDetails />
        </div>
      </div>
    </ExpenseDataContext.Provider>
  );
}
