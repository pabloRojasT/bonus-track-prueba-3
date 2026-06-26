import PropTypes from 'prop-types';

const MascotaCard = ({
  nombre = "Sin nombre",
  raza = "Desconocida",
  edad = 0,
  especie = "Otro",
  descripcion = "Sin información.",
  caracteristicas = []
}) => {
  
  // Función para determinar el color de fondo según la especie
  const obtenerEstiloEspecie = () => {
    switch (especie) {
      case 'Perro': return { backgroundColor: '#e0f2fe', border: '1px solid #7dd3fc' }; 
      case 'Gato': return { backgroundColor: '#fce7f3', border: '1px solid #f9a8d4' }; 
      default: return { backgroundColor: '#f3f4f6', border: '1px solid #d1d5db' }; 
    }
  };

  const cardStyle = {
    ...obtenerEstiloEspecie(),
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '1rem',
    color: '#333'
  };

  return (
    <div style={cardStyle}>
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

// Validación de tipos obligatoria según la rúbrica
MascotaCard.propTypes = {
  nombre: PropTypes.string,
  raza: PropTypes.string,
  edad: PropTypes.number,
  especie: PropTypes.oneOf(['Perro', 'Gato', 'Otro']),
  descripcion: PropTypes.string,
  caracteristicas: PropTypes.arrayOf(PropTypes.string)
};

export default MascotaCard;