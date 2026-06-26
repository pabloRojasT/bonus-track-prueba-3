import PropTypes from 'prop-types';

const FiltroEspecie = ({ filtroActual, setFiltroActual, busqueda, setBusqueda }) => {
  
  // Función para manejar el cambio en la búsqueda con desarrollo seguro
  const handleChangeBusqueda = (e) => {
    // Validamos y normalizamos: limitamos el largo del texto a 30 caracteres
    const valor = e.target.value.substring(0, 30);
    setBusqueda(valor);
  };

  return (
    <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="buscador" style={{ marginRight: '10px' }}><strong>Buscar por nombre:</strong></label>
        <input
          id="buscador"
          type="text"
          value={busqueda} // Input controlado por el estado de React
          onChange={handleChangeBusqueda}
          placeholder="Ej. Pelusa..."
          style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>
      <div>
        <label htmlFor="filtro-especie" style={{ marginRight: '10px' }}><strong>Filtrar por especie:</strong></label>
        <select 
          id="filtro-especie"
          value={filtroActual} 
          onChange={(e) => setFiltroActual(e.target.value)}
          style={{ padding: '5px', borderRadius: '4px' }}
        >
          <option value="Todas">Todas</option>
          <option value="Perro">Perro</option>
          <option value="Gato">Gato</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
    </div>
  );
};

FiltroEspecie.propTypes = {
  filtroActual: PropTypes.string.isRequired,
  setFiltroActual: PropTypes.func.isRequired,
  busqueda: PropTypes.string.isRequired,
  setBusqueda: PropTypes.func.isRequired
};

export default FiltroEspecie;