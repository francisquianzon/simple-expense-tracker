'use client';

import AddDialog from '../AddDialog';
import ExpenseList from './ExpensesList';
const Expenses = () => {
  return (
    <div className="flex w-3/4 flex-col">
      <div className="flex flex-row justify-between">
        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Records</h3>
        <AddDialog modifyExpense={false} />
      </div>
      <ExpenseList />
    </div>
  );
};

export default Expenses;
