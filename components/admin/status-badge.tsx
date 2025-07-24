"use client";

import { Badge } from "@/components/ui/badge";

interface StatusBadgeProps {
  status: "open" | "in-review" | "resolved";
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const baseClasses =
    "text-xs font-medium px-2 py-1 rounded-md border transition-colors duration-300";

  const styles = {
    open: "bg-red-100 text-red-600 border-red-300",
    "in-review": "bg-yellow-100 text-yellow-700 border-yellow-300",
    resolved: "bg-green-100 text-green-600 border-green-300",
  };

  return (
    <Badge className={`${baseClasses} ${styles[status]}`}>
      {status === "in-review" ? "In Review" : capitalize(status)}
    </Badge>
  );
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
