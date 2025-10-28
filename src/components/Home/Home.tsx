import { useState } from "react";
import { Button } from "../ui/button";
import EmptyListNotice from "./EmptyListNotice/EmptyListNotice";

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);

  return (
    <main className="h-full flex-1 flex px-4 py-3 md:px-6 md:py-4 xl:px-8 xl:py-6 flex-col justify-between max-w-7xl mx-auto w-full">
      <div className="flex-1 flex flex-col gap-2 md:gap-4 xl:gap-6">
        <h1 className="text-3xl md:text-4xl font-bold">List Management</h1>
        <p className="text-base md:text-lg text-muted-foreground">
          Manage your items easily — view, add, edit, or delete them.
        </p>
      </div>
      <div className="flex-1">
        {!items.length ? <EmptyListNotice /> : <></>}
      </div>
      <div className="w-full flex items-center justify-end">
        <Button>Create</Button>
      </div>
    </main>
  );
}
