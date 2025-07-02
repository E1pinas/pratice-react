import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { Gordo } from "./Gordo";
import { Footer } from "./cuerpo/Footer";
// import App, { Saludo, ListaAmigos } from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <Gordo></Gordo>
      <Footer></Footer>
    </>
  </StrictMode>
);
