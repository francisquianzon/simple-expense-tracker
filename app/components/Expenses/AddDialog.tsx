import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FormEvent } from 'react';
import { CategoryList } from '@/app/constants';
import { Textarea } from '@/components/ui/textarea';
import { ExpenseDataContext } from '@/app/page';
import { useContext } from 'react';
import { TExpenseData } from '@/app/types';
import { v4 as uuidv4 } from 'uuid';

const AddDialog = () => {
  const { setExpenseData } = useContext(ExpenseDataContext);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const expenseFormData: TExpenseData = {
      id: uuidv4(),
      name: formData.get('name') as string,
      amount: Number(formData.get('amount') as string),
      category: formData.get('category-select') as CategoryList,
      description: formData.get('description') as string,
      date: (formData.get('date') as string).toString(),
    };

    setExpenseData(expenseFormData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a record</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleFormSubmit}>
          <div className="flex flex-row gap-4">
            <div className="w-1/2">
              <Label className="text-right">Name</Label>
              <Input required className="col-span-3" name="name" type={'string'} />
            </div>
            <div className="w-1/2">
              <Label className="text-right">Amount</Label>
              <Input required defaultValue="0" type="number" name="amount" className="col-span-3" />
            </div>
          </div>
          <div className="my-4 w-full">
            <Label className="text-right">Date</Label>
            <Input defaultValue="0" type="date" name="date" className="col-span-3" />
          </div>
          <div className="my-4 w-full">
            <Label className="text-right">Category</Label>
            <Select required name="category-select">
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {Object.keys(CategoryList).map((item) => {
                    return (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="my-4 w-full">
            <Label className="text-right">Description</Label>
            <Textarea placeholder="Type your expense description here." name="description" />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddDialog;
