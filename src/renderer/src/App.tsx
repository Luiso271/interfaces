import { useState } from 'react';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Panel from "./components/Panel";
import Personal from "./components/Personal";
import Inventario from "./components/Inventario";
import Incidencias from "./components/Incidencias";
import './styles/App.css';

function App() {
  const [seccion, setSeccion] = useState<string>('Personal');

  return (
    <>
      <div id="Header">
        <Header />
      </div>
      <div id="Main">
        <div id="Sidebar">
          <Sidebar setSeccion={setSeccion} />
        </div>
        <div id="Panel">
          {seccion === 'Personal' && <Personal />}
          {seccion === 'Inventario' && <Inventario />}
          {seccion === 'Incidencias' && <Incidencias />}
        </div>
      </div>
    </>
  );
}

export default App;