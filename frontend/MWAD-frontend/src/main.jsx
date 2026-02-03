import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Homepage from "./pages/homepage"
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/homepage" element={<Homepage />} /> {/* Example route added for homepage feel free to tweak these routes*/}
    </Routes>
  </BrowserRouter>,
);
