import React from "react";
import Skeleton from "../Skeleton/Skeleton";

const NavbarSkeleton = () => {
  return (
    <Skeleton
      theme="dark"
      width="500px"
      height="25px"
      className="w-[25px] h-[25px] rounded-full"
    />
  );
};

export default NavbarSkeleton;
