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

  // Calculamos el total de adopciones urgentes en el listado actual 
  const cantidadUrgentes = mascotasFiltradas.filter(m => m.adopcionUrgente).length;

  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
      <h1>AdoptaPet - Directorio de Mascotas</h1>
      
      {/* Contador destacado  */}
      <div style={{ backgroundColor: '#fee2e2', color: '#991b1b', padding: '10px', borderRadius: '8px', marginBottom: '20px', fontWeight: 'bold' }}>
        🐾 Mascotas con adopción urgente: {cantidadUrgentes}
      </div>

      <FiltroEspecie 
        filtroActual={filtro} 
        setFiltroActual={setFiltro} 
        busqueda={busqueda} 
        setBusqueda={setBusqueda} 
      />

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