import React from "react";
import { cambiarImagen,reiniciarMarcador} from "../funciones/funciones";


function Botones(props){

    function clickImagen(evento){
        cambiarImagen(evento,props.estado, props.setEstado);
    }

    function clickReiniciar(){
        reiniciarMarcador(props.setEstado);
    }


    return(
        <div className="Botones">
           <div className="BotonesSuperiores BloqueBotones">
                <button name="piedra" className="Piedra Boton" onClick={clickImagen} disabled={props.estado.usuario == 3 || props.estado.pc == 3 ? true:false}>Piedra</button>
                <button name="papel" className="Papel Boton" onClick={clickImagen} disabled={props.estado.usuario == 3 || props.estado.pc == 3 ? true:false}>Papel</button>
           </div>
           <div className="BotonesInferiores BloqueBotones">
                <button name="tijera" className="Tijera Boton" onClick={clickImagen} disabled={props.estado.usuario == 3 || props.estado.pc == 3 ? true:false}>Tijera</button>
                <button className="Repetir Boton" onClick={clickReiniciar}>Repetir juego</button>
           </div>

            {props.estado.usuario == 3 || props.estado.pc == 3 ? <h2 className="Ganador">El ganador es: {props.estado.usuario == 3 ? "Usuario":"PC"} </h2>:false}

        </div>
    )
}

export default Botones