'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useContext, useMemo } from 'react';
import { ExpenseDataContext } from '@/app/page';

const ExpenseDetails = () => {
  const { activeDataId, data } = useContext(ExpenseDataContext);

  // Finds and sets the expense to be displayed based on the given ID
  const activeExpenseObject = useMemo(() => {
    const activeExpense = data.find((datum) => datum.id === activeDataId);
    return activeExpense;
  }, [activeDataId]);

  return (
    <div className="flex h-full w-1/3 flex-col">
      <div className="flex flex-row">
        <Card className="mx-2 w-1/2">
          <CardHeader>
            <CardTitle className="text-base">Total cash</CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">$23,500</h2>
          </CardContent>
        </Card>
        <Card className="ml-2 w-1/2">
          <CardHeader>
            <CardTitle className="text-base">Total expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">$1,340</h2>
          </CardContent>
        </Card>
      </div>
      <Card className="ml-2 mt-4 h-full pb-8">
        <CardHeader>
          <CardTitle className="border-b pb-2">Details</CardTitle>
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
