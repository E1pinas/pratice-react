import { useState } from "react";

function App() {
  return <h1>Hola friend</h1>;
}

export const Saludo = ({ mensaje, autor, fecha }) => {
  const [contador, setContador] = useState(0);
  return (
    <div>
      <h2>{mensaje}</h2>
      <p>{autor}</p>
      <small>{fecha}</small>
      <button
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        Presionar aqui
      </button>
      <button
        onClick={() => {
          contador > 0 ? setContador(contador - 1) : null;
        }}
      >
        Resta
      </button>
      <p>{contador}</p>
    </div>
  );
};

export const ListaAmigos = () => {
  const amigos = ["daichi", "cookie", "jett", "aea"];
  const [grupo, setGrupo] = useState(amigos);
  const [nuevoAmigo, setNuevoAmigo] = useState("");

  return (
    


    <div>
      <h2>Ingresa un nuevo amigo</h2>
      <input
        placeholder="Agrega causa"
        type="text"
        value={nuevoAmigo}
        onChange={(e) => {
          setNuevoAmigo(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (nuevoAmigo.trim() === "") return; // Si vacío, no hace nada
          setGrupo([...grupo, nuevoAmigo]);     // Agrega al array
          setNuevoAmigo("");                    // Limpia input
        }}
      >
        Añadir
      </button>

      <ul>
        {grupo.map((friend) => (
          <li key={friend}>{friend}</li>
        ))}
      </ul>
    </div>
  );
};


export default App;
