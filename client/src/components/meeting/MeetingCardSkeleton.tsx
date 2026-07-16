import Skeleton from "../common/Skeleton";

const MeetingCardSkeleton = () => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">

      <Skeleton className="mb-4 h-7 w-2/3" />

      <Skeleton className="mb-2 h-4 w-full" />
      <Skeleton className="mb-2 h-4 w-5/6" />
      <Skeleton className="mb-6 h-4 w-4/6" />

      <Skeleton className="mb-3 h-5 w-24" />

      <Skeleton className="h-4 w-32" />

    </div>
  );
};

export default MeetingCardSkeleton;
