import { useState, useEffect } from 'react';
import '../styles/Inventario.css';

interface Producto {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

function Inventario(): React.JSX.Element {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    async function obtenerInventario(): Promise<void> {
      setCargando(true);
      try {
        const respuesta = await fetch("https://fakestoreapi.com/products?limit=6");
        const datos: Producto[] = await respuesta.json();
        setProductos(datos); 
      } catch (error) {
        console.error("Error al cargar el inventario:", error);
      } finally {
        setCargando(false);
      }
    }

    obtenerInventario();
  }, []);

  return (
    <div>
      <h2>Inventario de Activos y Material</h2>
      {cargando && <p>Cargando inventario...</p>}

      <div className="contenedor-tarjetas">
        {productos.map((producto) => (
          <div className="tarjeta-activo" key={producto.id}>
            <img 
              src={producto.image} 
              alt={producto.title} 
              style={{ width: '5rem', height: '5rem'}} 
            />
            <h3>{producto.title}</h3>
            <p>Precio: ${producto.price}</p>
            
            {producto.price > 50 && (
              <span className="etiqueta-alto-valor" style={{ backgroundColor: 'gold', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontWeight: 'bold' }}>
                Activo de Alto Valor
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inventario;