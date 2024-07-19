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
import { Input } from '@/components/ui/input';
import { FormEvent, useContext } from 'react';
import { ExpenseDataContext } from '@/app/page';

const EditTotalDialog = () => {
  const { totalCash, setTotalCash } = useContext(ExpenseDataContext);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    setTotalCash(Number(formData.get('updatedCash')));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link">Edit</Button>
      </DialogTrigger>
      <DialogContent className="w-1/5">
        <DialogHeader>
          <DialogTitle>Adjust total balance</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleFormSubmit}>
          <div className="pb-4">
            <Input defaultValue={totalCash} required name="updatedCash" type="number" />
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

export default EditTotalDialog;
