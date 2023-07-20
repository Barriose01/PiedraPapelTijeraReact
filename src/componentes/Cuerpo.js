import React from "react";
import Marcador from "./Marcador";
import BloqueImagenes from "./BloqueImagenes";
import Botones from "./Botones";

function Cuerpo(){

    let [objEstado,setObjEstado] = React.useState({
        usuario:0,
        ronda:0,
        pc:0,
        imagenUsuario:"",
        imagenPC:""
    })


    return (
        <div className="Cuerpo">
            <Marcador objMarcador = {objEstado}></Marcador>
            <BloqueImagenes imagenes ={objEstado}></BloqueImagenes>
            <Botones estado={objEstado} setEstado={setObjEstado}></Botones>
        </div>
    )
}

export default Cuerpo