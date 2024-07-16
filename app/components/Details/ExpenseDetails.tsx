"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExpenseDetails = () => {
    return (
        <div className="w-1/3 min-h-full flex flex-col px-4 min-h-full">
            <div className="flex flex-row">
                <Card className="w-1/2 mx-2">
                    <CardHeader>
                        <CardTitle className="text-base">Total cash</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">$23,500</p>
                    </CardContent>
                </Card>
                <Card className="w-1/2 ml-2">
                    <CardHeader>
                        <CardTitle className="text-base">Total expenses</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <p className="text-3xl font-bold">$1,340</p>
                    </CardContent>
                </Card>
            </div>
            <Card className="ml-2 mt-4 pb-8 max-h-full">
                <CardHeader>
                    <CardTitle>Details</CardTitle>
                </CardHeader>
                <CardContent>
                    Render details here
                </CardContent>
            </Card>
        </div>
    )
};

export default ExpenseDetails;