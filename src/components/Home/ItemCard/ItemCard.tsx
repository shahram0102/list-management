"use client";

import { show } from "@ebay/nice-modal-react";
import { Calendar, Pencil, Trash2 } from "lucide-react";
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
  const createdAt = new Date(Number(item.id)).toLocaleDateString("en-US", {
    dateStyle: "medium",
    timeZone: "America/New_York",
  });

  async function showEditDialog() {
    await show(UpdateItemDialog, { onEdit, item });
  }

  return (
    <Card className="transition hover:shadow-md flex flex-col justify-between h-full max-h-64">
      <CardHeader>
        <div className="flex flex-col gap-1">
          <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
          <CardDescription>{item.subTitle}</CardDescription>
          <div className="flex items-center text-xs text-muted-foreground mt-1">
            <Calendar className="w-3 h-3 mr-1" />
            {createdAt}
          </div>
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
