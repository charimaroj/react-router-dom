import React from "react";
import { Outlet } from "react-router-dom";
Outlet;

const VansLayout = () => {
  return (
    <>
      <div>VansLayout</div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default VansLayout;
