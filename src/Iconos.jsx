import { Home, Music, Search } from 'lucide-react';

function Iconos() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Mi clon de Spotify 🎵</h1>
      <Home size={32} color="blue" />
      <Music size={32} color="green" />
      <Search size={32} color="purple" />
    </div>
  );
}

export default Iconos;
