import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        {
          "bg-primary/15 text-primary border border-primary/20":
            variant === "default",
          "bg-secondary text-secondary-foreground border border-border":
            variant === "secondary",
          "border border-primary/30 text-primary bg-transparent":
            variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
