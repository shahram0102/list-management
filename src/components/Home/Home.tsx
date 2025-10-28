import { useState } from "react";
import { toast } from "sonner";
import { ScrollArea } from "../ui/scroll-area";
import { CreateItemDialog } from "./CreateItemDialog/CreateItemDialog";
import EmptyListNotice from "./EmptyListNotice/EmptyListNotice";
import ItemCard from "./ItemCard/ItemCard";

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);

  function onAdd(item: Item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function onDelete(id: string) {
    const isConfirmed = confirm("Are you sure you want to delete this Item?");
    if (!isConfirmed) return;
    setItems((prevItems) => prevItems.filter((i) => i.id !== id));
    toast.success("Item deleted successfully.");
  }

  function onEdit(updatedItem: Item) {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  }

  return (
    <main className="h-full min-h-0 flex-1 flex px-4 py-3 md:px-6 md:py-4 xl:px-8 xl:py-6 flex-col justify-between max-w-7xl mx-auto w-full gap-3 md:gap-6">
      <div className="flex flex-col gap-2 md:gap-4 xl:gap-6">
        <h1 className="text-3xl md:text-4xl font-bold">List Management</h1>
        <p className="text-base md:text-lg text-muted-foreground">
          Manage your items easily — view, add, edit, or delete them.
        </p>
      </div>
      <ScrollArea className="size-full min-h-0 flex-1">
        <div className="grid gap-4 size-full md:grid-cols-2 lg:grid-cols-3 ">
          {!items.length ? (
            <EmptyListNotice />
          ) : (
            items.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          )}
        </div>
      </ScrollArea>
      <div className="w-full flex items-center justify-end">
        <CreateItemDialog onAdd={onAdd} />
      </div>
    </main>
  );
}
