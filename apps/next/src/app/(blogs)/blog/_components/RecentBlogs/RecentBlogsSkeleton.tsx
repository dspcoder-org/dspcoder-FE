import Skeleton from "@/components/Skeleton/Skeleton";
import React from "react";

const RecentBlogsSkeleton = () => {
  return (
    <div className="grid grid-flow-row gap-4">
      <Skeleton
        theme="light"
        width="500px"
        height="25px"
        className="h-[120px] w-[648] md:h-[165px] rounded-md"
      />
      <Skeleton
        theme="light"
        width="500px"
        height="25px"
        className="h-[120px] w-[648] md:h-[165px] rounded-md"
      />
      <Skeleton
        theme="light"
        width="500px"
        height="25px"
        className="h-[120px] w-[648] md:h-[165px] rounded-md"
      />
    </div>
  );
};

export default RecentBlogsSkeleton;
