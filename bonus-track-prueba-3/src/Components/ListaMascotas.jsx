import PropTypes from 'prop-types';
import MascotaCard from './MascotaCard';

const ListaMascotas = ({ mascotas = [] }) => {
  return (
    <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
      {/* Recorremos el arreglo y renderizamos un MascotaCard por cada elemento */}
      {mascotas.map((mascota) => (
        <MascotaCard
          key={mascota.id}
          nombre={mascota.nombre}
          raza={mascota.raza}
          edad={mascota.edad}
          especie={mascota.especie}
          descripcion={mascota.descripcion}
          caracteristicas={mascota.caracteristicas}
        />
      ))}
    </div>
  );
};

// Validamos que la prop mascotas sea efectivamente un arreglo
ListaMascotas.propTypes = {
  mascotas: PropTypes.array
};

export default ListaMascotas;