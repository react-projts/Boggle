import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const links = [
  { url: "/search", text: "🔎 All" },
  { url: "/images", text: "📷 Images" },
];

const Links = () => {
  return (
    <div
      style={{
        marginTop: "15px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {links.map(({ url, text }) => (
        <NavLink
          to={url}
          style={{
            margin: "7px",
          }}
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
              : ""
          }
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
