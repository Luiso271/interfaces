import { useState } from "react";
import '../styles/Header.css'
import logoImg from '../images/logo.png'

function Header(){
    const [hora, setHora] = useState(() => new Date().toLocaleTimeString());

    setInterval(() => {setHora(new Date().toLocaleTimeString())}, 1000);

    return(
        <>
            <div id="head1">
                <h1>Empresa de prueba</h1>
                <img src={logoImg} id="logo"/>
            </div>
            <div id="head2">
                <h1>{hora}</h1>
            </div>
        </>
    )
}
export default Header;