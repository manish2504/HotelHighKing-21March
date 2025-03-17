import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Admin from "./assets/admin/Admin.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>
);
