import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import SiteRouter from './SiteRouter.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SiteRouter />
  </StrictMode>,
);
