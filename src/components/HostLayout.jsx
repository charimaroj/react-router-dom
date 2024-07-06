import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const HostLayout = () => {
  return (
    <>
      <nav className="host-nav">
        <NavLink
          className={({isActive}) => isActive ? "active" : null}
          to="."
          end
        >
          Dashboard
        </NavLink>
        <NavLink to="income">Income</NavLink>
        <NavLink to="vans">Vans</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default HostLayout;
