import { useState } from 'react';
import { mascotas } from './data/mascotas';
import ListaMascotas from './components/ListaMascotas';
import FiltroEspecie from './components/FiltroEspecie';

function App() {

  const [filtro, setFiltro] = useState('Todas');
  const [busqueda, setBusqueda] = useState('');


  const busquedaNormalizada = busqueda.trim().toLowerCase();


  const mascotasFiltradas = mascotas.filter((mascota) => {
    const coincideEspecie = filtro === 'Todas' || mascota.especie === filtro;
    const coincideNombre = mascota.nombre.toLowerCase().includes(busquedaNormalizada);
    return coincideEspecie && coincideNombre;
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
      <h1>AdoptaPet - Directorio de Mascotas</h1>
      
      <FiltroEspecie 
        filtroActual={filtro} 
        setFiltroActual={setFiltro} 
        busqueda={busqueda} 
        setBusqueda={setBusqueda} 
      />

      {/* Renderizado condicional: mostramos la lista o el mensaje si está vacío */}
      {mascotasFiltradas.length > 0 ? (
        <ListaMascotas mascotas={mascotasFiltradas} />
      ) : (
        <p style={{ color: '#dc2626', fontWeight: 'bold', fontSize: '1.2rem' }}>
          No hay mascotas que coincidan con tu búsqueda.
        </p>
      )}
    </div>
  );
}

export default App;