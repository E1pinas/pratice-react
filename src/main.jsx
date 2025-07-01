import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App, { Saludo, ListaAmigos } from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App></App>
    <Saludo mensaje="Hola" autor="Elpiñas" fecha="2025-07-01" />
    <ListaAmigos></ListaAmigos>
  </StrictMode>
);
