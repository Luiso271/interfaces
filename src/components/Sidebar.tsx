import '../styles/Sidebar.css'

function Sidebar(){

  async function obtenerUsuario(): Promise<void> {
    try {
      const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
      const datos = await respuesta.json();

      // Recorremos el arreglo de usuarios y extraemos solo lo que necesitamos
      datos.forEach((usuario: any) => {
        console.log({
          nombre: usuario.name,
          correo: usuario.email,
          ciudad: usuario.address.city
        });
      });

    } catch (error) {
      console.error("Error de red:", error);
    }
  }

  return(
      <>
          <br></br>
          <div id="pestaña1" className="Sidebar">
              <button className="Boton" onClick={obtenerUsuario}>Personal</button>
              <h1></h1>
          </div>
          <div id="pestaña2" className="Sidebar">
              <button className="Boton">Inventario</button>
          </div>
          <div id="pestaña3" className="Sidebar">
              <button className="Boton">Incidencias</button>
          </div>
      </>
  )
}

export default Sidebar;