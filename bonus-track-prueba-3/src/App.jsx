import { mascotas } from './data/mascotas';

function App() {
  // Verificamos en consola que el array carga correctamente
  console.log("Datos cargados:", mascotas);

  return (
    <div>
      <h1>AdoptaPet - Directorio de Mascotas</h1>
    </div>
  );
}

export default App;