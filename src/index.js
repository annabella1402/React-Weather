import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Search from "./Search";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Search />
  </StrictMode>
);
