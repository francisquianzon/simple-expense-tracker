"use client"

import ExpenseList from "./ExpenseList/ExpensesList";
import { Button } from "@/components/ui/button";
const Expenses = () => {
    return (
        <div className="w-2/3">
            <div className="flex flex-row justify-between">
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Records
                </h3>
                <Button className="">Add</Button>
            </div>
            <ExpenseList/>
        </div>
    )
}

export default Expenses;