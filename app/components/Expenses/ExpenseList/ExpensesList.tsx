"use client";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { expensesData } from "@/app/mocks/expenses";
import { TExpenseData } from "@/app/mocks/expenses";

const ExpenseList = () => {
    const handleRowClick = (expense: TExpenseData) => {
        // ToDo: RowClick logic
        console.log("Row is clicked", expense);
    }
    return (
        <div className='w-full max-h-full overflow-y-auto rounded-md border mt-2'>
            <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[100px]">Amount</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Date</TableHead>
                    <TableHead className="text-center">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {expensesData.map((expense, idx) => (
                    <TableRow key={expense.name + idx} onClick={() => handleRowClick(expense)}>
                        <TableCell className="font-medium">{expense.amount}</TableCell>
                        <TableCell>{expense.name}</TableCell>
                        <TableCell>{expense.category}</TableCell>
                        <TableCell className="text-right">{expense.date ? expense.date.toString() : ''}</TableCell>
                        <TableCell className="text-center">Delete</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
};

export default ExpenseList;