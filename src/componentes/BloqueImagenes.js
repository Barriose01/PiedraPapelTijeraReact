import React from "react";
import tijera from "../imagenes/tijera.jpg";
import papel from "../imagenes/papel.jpg";
import piedra from "../imagenes/piedra.jpg";

function BloqueImagenes(props){

    let tijeraYPapelUsuario = {
        transform: (props.imagenes.imagenUsuario == tijera ? "rotateY(180deg)":props.imagenes.imagenUsuario == papel && "rotateY(180deg)")
    }
    let piedraPC = {
        transform: props.imagenes.imagenPC == piedra && "rotateY(180deg)"
    }
    return(
        <div className="BloqueImagenes">
            <div className="BloqueUsuario BloquesImagenes">
                <h2 className="TituloUsuario TitulosImagenes">Usuario:</h2>
               {props.imagenes.imagenUsuario != "" && <img className="ImagenUsuario Imagen" src={props.imagenes.imagenUsuario} style={tijeraYPapelUsuario}  alt="Imagen usuario"></img>} 

            </div>
            <div className="BloquePC BloquesImagenes">
            <h2 className="TituloPC TitulosImagenes">PC:</h2>
               {props.imagenes.imagenPC != "" && <img className="ImagenPC Imagen" src={props.imagenes.imagenPC} style={piedraPC}  alt="Imagen PC"></img> } 

            </div>

        </div>
    )
}

export default BloqueImagenes