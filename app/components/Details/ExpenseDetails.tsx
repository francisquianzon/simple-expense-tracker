'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useContext, useMemo } from 'react';
import { ExpenseDataContext } from '@/app/page';
import EditTotalDialog from './EditTotalDialog';
import AddDialog from '../AddDialog';

const ExpenseDetails = () => {
  const { activeDataId, data, totalCash } = useContext(ExpenseDataContext);
  const totalExpenses = data.reduce((accumulator, datum) => {
    return (accumulator += datum.amount);
  }, 0);

  // Finds and sets the expense to be displayed based on the given ID
  const activeExpenseObject = useMemo(() => {
    const activeExpense = data.find((datum) => datum.id === activeDataId);
    return activeExpense;
    // Added data as a dependency to update details when an expense is deleted
  }, [activeDataId, data]);

  return (
    <div className="flex h-full w-1/3 flex-col">
      <div className="flex flex-row">
        <Card className="mx-2 w-1/2">
          <CardHeader>
            <div className="flex flex-row">
              <CardTitle className="text-base">Total cash</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col">
              <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">${totalCash}</h2>
              <div className="flex flex-1 justify-end">
                <EditTotalDialog />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="ml-2 w-1/2">
          <CardHeader>
            <CardTitle className="text-base">Total expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">${totalExpenses}</h2>
          </CardContent>
        </Card>
      </div>
      <Card className="ml-2 mt-4 h-full pb-8">
        <CardHeader>
          <div className="flex flex-row border-b pb-4">
            <CardTitle>Details</CardTitle>
            {activeExpenseObject && (
              <div className="flex flex-1 justify-end">
                <AddDialog modifyExpense={true} activeExpense={activeExpenseObject} />
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {activeExpenseObject ? (
            <div className="flex flex-col gap-8">
              <div className="flex flex-row">
                <div>
                  <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{activeExpenseObject.name}</h3>
                  <small className="text-sm font-medium leading-none">{activeExpenseObject.date}</small>
                </div>
                <h2 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0 flex flex-1 justify-end">
                  ${activeExpenseObject.amount}
                </h2>
              </div>
              <div>
                <small className="text-sm font-medium leading-none">Category</small>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{activeExpenseObject.category}</h4>
              </div>
              <div className="overflow-y-auto max-h-1/2">
                <small className="text-sm font-medium leading-none">Description</small>
                <p className="leading-5 [&:not(:first-child)]:mt-2">{activeExpenseObject.description}</p>
              </div>
            </div>
          ) : (
            <h1>Click a record</h1>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ExpenseDetails;
