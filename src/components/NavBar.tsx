import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex bg-gray-50 p-4 gap-6">
      <NavLink
        to="/todos"
        className={({ isActive }) =>
          isActive ? "underline text-blue-500 font-bold " : "text-gray-700 "
        }
      >
        <p>Todos</p>
      </NavLink>
      <NavLink
        to="/posts"
        className={({ isActive }) =>
          isActive ? "underline text-blue-500 font-bold " : "text-gray-700"
        }
      >
        <p>Posts</p>
      </NavLink>
      <NavLink
        to="/photos"
        className={({ isActive }) =>
          isActive ? "underline text-blue-500 font-bold " : "text-gray-700"
        }
      >
        <p>Photos</p>
      </NavLink>
    </div>
  );
}
