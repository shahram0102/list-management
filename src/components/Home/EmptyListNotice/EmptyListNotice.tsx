import { Alert, AlertTitle, AlertDescription } from "~/components/ui/alert";
import { InboxIcon } from "lucide-react";

export default function EmptyListNotice() {
  return (
    <Alert className="flex items-start gap-3 py-4">
      <InboxIcon className="h-5 w-5 text-muted-foreground mt-0.5" />
      <div>
        <AlertTitle className="font-semibold">No items yet</AlertTitle>
        <AlertDescription className="text-sm text-muted-foreground">
          Your list is currently empty. Add your first item to get started.
        </AlertDescription>
      </div>
    </Alert>
  );
}
