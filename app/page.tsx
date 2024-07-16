"use client";
import Header from "./components/Header";
import Expenses from "./components/Expenses/Expenses";
import ExpenseDetails from "./components/Details/ExpenseDetails";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8">
      <Header/>
      <div className="flex flex-row min-h-full pb-12">
        <Expenses/>
        <ExpenseDetails/>
      </div>
    </main>
  );
}
