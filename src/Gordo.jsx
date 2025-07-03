import { useState } from "react";
import { Main } from "./cuerpo/Main";
import { Aside } from "./cuerpo/Aside";
import { Header } from "./Header";
import { Footer } from "./cuerpo/Footer";
export const Gordo = () => {
  const [asideVisible, setAsideVisible] = useState(true);
  const toggleAside = () => {
    
    setAsideVisible((v) => !v);
  };

  return (
    <>
      <Header onEliminarClick={toggleAside}></Header>
      <div className="flex min-h-screen w-full">
        <Main />
        <Aside visible={asideVisible} />
      </div>
      <Footer onEliminarClick={toggleAside}></Footer>
    </>
  );
};
