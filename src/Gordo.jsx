import { useState } from "react";
import { Main } from "./cuerpo/Main";
import { Aside } from "./cuerpo/Aside";
import { Header } from "./Header"; // Asegúrate de importar Header

export const Gordo = () => {
  const [asideVisible, setAsideVisible] = useState(true);
  const toggleAside = () => setAsideVisible((v) => !v);

  return (
    <>
      <Header onEliminarClick={toggleAside} />
      <div className="flex min-h-screen w-full">
        <Main />
        <Aside visible={asideVisible} />
      </div>
      
    </>
  );
};
