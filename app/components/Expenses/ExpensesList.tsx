"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TExpenseData } from "@/app/types";
import { useContext } from "react";
import { ExpenseDataContext } from "@/app/page";

const ExpenseList = () => {
  const { data } = useContext(ExpenseDataContext);
  const handleRowClick = (expense: TExpenseData) => {
    // ToDo: RowClick logic
    console.log("Row is clicked", expense);
  };

  if (!data?.length) {
    return <h1>No data to show</h1>;
  }
  return (
    <div className="mt-2 w-full overflow-y-auto rounded-md border">
      <Table className="h-full">
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
          {data.map((expense, idx) => (
            <TableRow
              key={expense.name + idx}
              onClick={() => handleRowClick(expense)}
            >
              <TableCell className="font-medium">$ {expense.amount}</TableCell>
              <TableCell>{expense.name}</TableCell>
              <TableCell>{expense.category}</TableCell>
              <TableCell className="text-right">
                {expense.date ? expense.date.toString() : ""}
              </TableCell>
              <TableCell className="text-center">Delete</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ExpenseList;
