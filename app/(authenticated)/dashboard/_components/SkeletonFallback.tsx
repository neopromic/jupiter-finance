import { Skeleton } from "@/app/_components/ui/skeleton";

const DashboardSkeleton = () => {
  return (
    <div className="flex h-[calc(100vh-72px)] flex-col gap-6 p-6">
      <div className="grid h-full gap-6 lg:grid-cols-[2fr,1fr]">
        <div className="pr-0 lg:pr-6">
          <div className="space-y-6 overflow-hidden">
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:gap-0">
              <Skeleton className="h-12 w-full" />
            </div>

            <Skeleton className="h-12 w-full" />

            <div className="grid grid-cols-1 gap-6 overflow-hidden md:grid-cols-2 lg:grid-cols-3">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        </div>

        <div className="lg:h-full">
          <Skeleton className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default DashboardSkeleton;
