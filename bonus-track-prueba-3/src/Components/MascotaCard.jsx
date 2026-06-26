import PropTypes from 'prop-types';

const MascotaCard = ({
  nombre = "Sin nombre",
  raza = "Desconocida",
  edad = 0,
  especie = "Otro",
  descripcion = "Sin información.",
  caracteristicas = [],
  adopcionUrgente = false // Nueva prop
}) => {
  
  const obtenerEstiloEspecie = () => {
    switch (especie) {
      case 'Perro': return { backgroundColor: '#e0f2fe', border: '1px solid #7dd3fc' }; 
      case 'Gato': return { backgroundColor: '#fce7f3', border: '1px solid #f9a8d4' }; 
      default: return { backgroundColor: '#f3f4f6', border: '1px solid #d1d5db' }; 
    }
  };

  // Renderizado condicional para el borde: rojo si es urgente 
  const bordeUrgente = adopcionUrgente ? '3px solid #dc2626' : obtenerEstiloEspecie().border;

  const cardStyle = {
    ...obtenerEstiloEspecie(),
    border: bordeUrgente,
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '1rem',
    color: '#333'
  };

  return (
    <div style={cardStyle}>
      {/* Etiqueta condicional para destacar la adopción urgente  */}
      {adopcionUrgente && (
        <span style={{ backgroundColor: '#dc2626', color: 'white', padding: '4px 8px', borderRadius: '4px', fontWeight: 'bold', fontSize: '0.8rem', display: 'inline-block', marginBottom: '10px' }}>
          ¡ADOPCIÓN URGENTE!
        </span>
      )}
      <h3>{nombre}</h3>
      <p><strong>Especie:</strong> {especie}</p>
      <p><strong>Raza:</strong> {raza}</p>
      <p><strong>Edad:</strong> {edad} años</p>
      <p><strong>Descripción:</strong> {descripcion}</p>
      <div>
        <strong>Características:</strong>
        <ul>
          {caracteristicas.map((caracteristica, index) => (
            <li key={index}>{caracteristica}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

MascotaCard.propTypes = {
  nombre: PropTypes.string,
  raza: PropTypes.string,
  edad: PropTypes.number,
  especie: PropTypes.oneOf(['Perro', 'Gato', 'Otro']),
  descripcion: PropTypes.string,
  caracteristicas: PropTypes.arrayOf(PropTypes.string),
  adopcionUrgente: PropTypes.bool // Validación de la nueva prop
};

export default MascotaCard;