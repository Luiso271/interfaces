import { useState, useEffect } from 'react';

interface Incidencia {
  id: number;
  title: string;
  completed: boolean;
}

function Incidencias(): React.JSX.Element {
  const [incidencias, setIncidencias] = useState<Incidencia[]>([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    async function obtenerIncidencias(): Promise<void> {
      setCargando(true);
      try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=8");
        const datos: Incidencia[] = await respuesta.json();
        setIncidencias(datos);
      } catch (error) {
        console.error("Error al cargar las incidencias:", error);
      } finally {
        setCargando(false);
      }
    }

    obtenerIncidencias();
  }, []);

  return (
    <div>
      <h2>Registro de Incidencias y Tareas</h2>
      {cargando && <p>Cargando incidencias...</p>}

      <div className="contenedor-tarjetas">
        {incidencias.map((incidencia) => (
          <div 
            className="tarjeta-activo" 
            key={incidencia.id}
            style={{
              backgroundColor:incidencia.completed ? 'lightgreen' : 'lightcoral'}}
          >
            <h3>Incidencia #{incidencia.id}</h3>
            <p>{incidencia.title}</p>
            
            {incidencia.completed ? (
              <span style={{ color: 'green', fontWeight: 'bold' }}>
                Resuelta
              </span>
            ) : (
              <span style={{ color: 'red', fontWeight: 'bold' }}>
                Pendiente
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Incidencias;