import { create, useModal } from "@ebay/nice-modal-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "~/components/ui/alert-dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import useStore from "~/store/index.store";
import { itemSchemaValidation } from "~/validation/item.validation";

type CreateItemDialogProps = {
  item: Item;
};

const UpdateItemDialog = create(({ item }: CreateItemDialogProps) => {
  const modal = useModal();

  const form = useForm<z.infer<typeof itemSchemaValidation>>({
    resolver: zodResolver(itemSchemaValidation),
    defaultValues: {
      ...item,
    },
  });

  function onSubmit(values: z.infer<typeof itemSchemaValidation>) {
    useStore.getState().editItem({ ...values, id: item.id });
    toast.success("Item Edited successfully.");
    onClose();
  }

  function onClear() {
    form.reset({ ...item });
    onClose();
  }

  function onClose() {
    modal.remove();
  }

  return (
    <AlertDialog open={modal.visible}>
      <AlertDialogContent className="sm:max-w-[425px]">
        <AlertDialogHeader className="text-start">
          <AlertDialogTitle>Update Item</AlertDialogTitle>
          <AlertDialogDescription>
            Update and edit " {item.title} ".
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subtitle</FormLabel>
                  <FormControl>
                    <Input placeholder="Subtitle" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-3 justify-end">
              <AlertDialogCancel onClick={onClear}>Cancel</AlertDialogCancel>
              <AlertDialogAction
                type="button"
                onClick={form.handleSubmit(onSubmit)}
              >
                Submit
              </AlertDialogAction>
            </div>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
});

export default UpdateItemDialog;
