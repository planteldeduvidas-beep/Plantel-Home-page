import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import PlantelLab from "./pages/PlantelLab.jsx";
import App from "./App.jsx";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/plantel-lab" element={<PlantelLab />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
