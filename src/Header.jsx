import { Agregar_btn } from "./botones/Agregar_btn";
import { Editar_jsx } from "./botones/Editar_btn";
import { Eliminar_btn } from "./botones/Eliminar_btn";
import { Home, Music, Search } from 'lucide-react';
export const Header = ({ onEliminarClick }) => {
  return (
    <header className="bg-amber-600 flex justify-between p-1.5 rounded-2xl w-full">
      <Agregar_btn></Agregar_btn>
      <Editar_jsx></Editar_jsx>
      <Eliminar_btn onClick={onEliminarClick} />
    </header>
  );
};
