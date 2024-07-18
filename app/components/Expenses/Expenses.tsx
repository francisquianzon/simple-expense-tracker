'use client';

import AddDialog from './AddDialog';
import ExpenseList from './ExpensesList';
const Expenses = () => {
  return (
    <div className="flex w-2/3 flex-col">
      <div className="flex flex-row justify-between">
        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Records</h3>
        <AddDialog />
      </div>
      <ExpenseList />
    </div>
  );
};

export default Expenses;
