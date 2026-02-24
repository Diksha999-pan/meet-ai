import { Dispatch, SetStateAction, useState } from "react";
import { 
  CommandDialog,
  CommandInput, 
  CommandItem, 
  CommandList,
  CommandGroup,
  CommandEmpty
} from "@/components/ui/command";




interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const DashboardCommand = ({ open, setOpen }: Props) => {
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput />
    </CommandDialog>
  )
};
