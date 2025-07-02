import { Agregar_btn } from "./botones/Agregar_btn";
import { Editar_jsx } from "./botones/Editar_btn";
import { Eliminar_btn } from "./botones/Eliminar_btn";
export const Header = () => {
  return (
    <div>
      <header className="bg-amber-600 flex justify-between p-2 rounded-2xl">
        <Agregar_btn />
        <Editar_jsx />
        <Eliminar_btn />
      </header>
    </div>
  );
};
