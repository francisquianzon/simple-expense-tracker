import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const AboutDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-xl font-light tracking-tight">
          About
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Simple expense tracker</DialogTitle>
          <DialogDescription>v1.0</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div>
            <p className="leading-5 [&:not(:first-child)]:mt-6">
              A simple expense tracker demo that can store expense data and display it on a table. Includes basic CRUD
              functionalities.
            </p>
            <p className="leading-5 [&:not(:first-child)]:mt-3 font-bold">
              Stack/Libraries: Next.js, Tailwind, shadcn/ui
            </p>
          </div>
          <h4>by Francis Quianzon</h4>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AboutDialog;
