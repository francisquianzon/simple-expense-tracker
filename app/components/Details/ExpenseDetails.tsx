"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExpenseDetails = () => {
  return (
    <div className="flex h-full w-1/3 flex-col gap-4">
      <div className="flex flex-row">
        <Card className="mx-2 w-1/2">
          <CardHeader>
            <CardTitle className="text-base">Total cash</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$23,500</p>
          </CardContent>
        </Card>
        <Card className="ml-2 w-1/2">
          <CardHeader>
            <CardTitle className="text-base">Total expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$1,340</p>
          </CardContent>
        </Card>
      </div>
      <Card className="ml-2 mt-4 h-full pb-8">
        <CardHeader>
          <CardTitle>Details</CardTitle>
        </CardHeader>
        <CardContent>Render details here</CardContent>
      </Card>
    </div>
  );
};

export default ExpenseDetails;
