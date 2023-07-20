import React from "react";

function Marcador(props){
    return(
        <div className="Marcador">
            <p className="ParrafoInstruccion">Tres (3) puntos para ganar</p>

            <div className="ContenidoMarcador">
                <div className="PuntosUsuario BloquesMarcador">
                    <h2>Puntos usuario</h2>
                    <h2>{props.objMarcador.usuario}</h2>

                </div>
                <div className="Ronda BloquesMarcador">
                    <h2>Ronda</h2>
                    <h2>{props.objMarcador.ronda}</h2>
                </div>
                <div className="PuntosPC BloquesMarcador">
                    <h2>Puntos PC</h2>
                    <h2>{props.objMarcador.pc}</h2>
                </div>

            </div>

        </div>
    )
}

export default Marcador