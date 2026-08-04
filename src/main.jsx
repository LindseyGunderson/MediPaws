import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/globals.css";
import { AppointmentProvider } from "./context/AppointmentContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppointmentProvider>
        <App />
      </AppointmentProvider>
    </BrowserRouter>
  </StrictMode>,
);
