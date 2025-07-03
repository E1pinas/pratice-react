import { Eliminar_btn } from "../botones/Eliminar_btn";

export const Footer = ({ onEliminarClick }) => {
  return (
    <footer className="bg-amber-600 flex justify-between p-1.5 rounded-2xl w-full">
      
      <Eliminar_btn onClick={onEliminarClick} />
    </footer>
  );
};
