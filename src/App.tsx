import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Panel from "./components/Panel";
import './styles/App.css'
function App() {

  return (
    <>
      <div id="Header">
        <Header></Header>
      </div>
      <div id="Main">
        <div id="Sidebar">
          <Sidebar></Sidebar>
        </div>
        <div id = "Panel">
          <Panel></Panel>
        </div>
      </div>
    </>
  )
}

export default App
