import { mascotas } from './data/mascotas';
import ListaMascotas from './components/ListaMascotas';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>AdoptaPet - Directorio de Mascotas</h1>
      {/* Renderizamos ListaMascotas pasándole los datos importados por props  */}
      <ListaMascotas mascotas={mascotas} />
    </div>
  );
}

export default App;