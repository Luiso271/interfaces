import '../styles/Sidebar.css';

interface SidebarProps {
  setSeccion: (seccion: string) => void;
}

function Sidebar({ setSeccion }: SidebarProps) {
  return (
    <>
      <br />
      <div id="pestaña1" className="Sidebar">
        <button className="Boton" onClick={() => setSeccion('Personal')}>Personal</button>
      </div>
      <div id="pestaña2" className="Sidebar">
        <button className="Boton" onClick={() => setSeccion('Inventario')}>Inventario</button>
      </div>
      <div id="pestaña3" className="Sidebar">
        <button className="Boton" onClick={() => setSeccion('Incidencias')}>Incidencias</button>
      </div>
    </>
  );
}

export default Sidebar;