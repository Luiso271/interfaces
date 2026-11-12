import { useState, useEffect } from 'react';
import '../styles/Personal.css';

interface Usuario {
  name: string;
  email: string;
  city: string;
}

function Personal(): React.JSX.Element {
  const [personal, setPersonal] = useState<Usuario[]>([]);
  const [cargando,setCargando] = useState(false);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    async function obtenerPersonal(): Promise<void> {
      setCargando(true);
      try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
        const datosCompletos = await respuesta.json();

        const datosFiltrados: Usuario[] = datosCompletos.map((user: Record<string, any>) => ({
          name: user.name,
          email: user.email,
          city: user.address.city
        }));

        setPersonal(datosFiltrados);
      } catch (error) {
        console.error("Error de red:", error);
      } finally {
        setCargando(false);
      }
    }

    obtenerPersonal();
  }, []);

  const usuariosFiltrados = personal.filter((user) =>
    user.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar empleado por nombre..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{ marginBottom: '1rem', padding: '0.5rem'}}
      />

      {cargando && <p>Cargando...</p>}

      <div className="tarjetas">
        {usuariosFiltrados.map((user, index) => (
          <div className="tarjeta-usuario" key={index}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Ciudad: {user.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Personal;