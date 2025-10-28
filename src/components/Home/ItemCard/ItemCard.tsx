"use client";

import { show } from "@ebay/nice-modal-react";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import UpdateItemDialog from "./UpdateItemDialog/UpdateItemDialog";

type ItemCardProps = {
  item: Item;
  onEdit: (item: Item) => void;
  onDelete: (id: string) => void;
};

export default function ItemCard({ item, onEdit, onDelete }: ItemCardProps) {
  async function showEditDialog() {
    await show(UpdateItemDialog, { onEdit, item });
  }

  return (
    <Card className="transition hover:shadow-md flex flex-col justify-between h-full max-h-64">
      <CardHeader>
        <div>
          <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
          <CardDescription>{item.subTitle}</CardDescription>
        </div>
      </CardHeader>

      <CardFooter className="justify-end gap-2">
        <Button
          onClick={showEditDialog}
          variant="outline"
          size="sm"
          className="flex items-center gap-1"
        >
          <Pencil className="h-4 w-4" /> Edit
        </Button>
        <Button
          variant="destructive"
          size="sm"
          onClick={() => onDelete(item.id)}
          className="flex items-center gap-1"
        >
          <Trash2 className="h-4 w-4" /> Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
