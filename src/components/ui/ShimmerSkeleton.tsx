import * as React from "react";
import { memo } from "react";
import { cn } from "@/lib/utils";

/**
 * GPU-accelerated shimmer skeleton for premium loading states.
 * Uses transform + opacity only for 60fps on mobile.
 */
const ShimmerSkeleton = memo(({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("shimmer-skeleton rounded-md", className)}
    {...props}
  />
));
ShimmerSkeleton.displayName = "ShimmerSkeleton";

/** Section-level skeleton matching typical section layout */
const SectionSkeleton = memo(({ lines = 3, className }: { lines?: number; className?: string }) => (
  <div className={cn("py-20 px-4", className)}>
    <div className="max-w-3xl mx-auto space-y-4">
      <ShimmerSkeleton className="h-4 w-24 mx-auto" />
      <ShimmerSkeleton className="h-8 w-3/4 mx-auto" />
      <ShimmerSkeleton className="h-5 w-1/2 mx-auto" />
      <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: lines }).map((_, i) => (
          <ShimmerSkeleton key={i} className="h-40 rounded-xl" />
        ))}
      </div>
    </div>
  </div>
));
SectionSkeleton.displayName = "SectionSkeleton";

export { ShimmerSkeleton, SectionSkeleton };
