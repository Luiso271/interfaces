import '../styles/Panel.css'
import Personal from './Personal';

function Panel(){
    return(
        <>
            <h1>Panel</h1>
            {/* {seccion === 'Personal' && <Personal />} */}
            {/* {seccion === 'Inventario' && <Inventario />} */}
            {/* {seccion === 'Incidencias' && <Incidencias />} */}
            <Personal/>
        </>
    )
}

export default Panel;