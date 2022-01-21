import React from "react";
import {Link} from 'react-router-dom';
import boton_regresar from '../../assets/boton_regresar.png';
import boton_agregar from '../../assets/boton_agregar.png';
import '../../styles/HomeOS.css';
import NoticiaInfo from "./NoticiaInfo";

const Noticia = () => {
    return(
        <>
            <div className="btn-container">
                <div className="regresar-btn-os">
                    <Link to="/">
                        <img src={boton_regresar} alt="regresar"></img>
                        <h2>Regresar</h2>
                    </Link>
                </div>
            

                <div className="agregar-btn">
                    <Link to="/noticia/agregar">
                        <h2>Agregar Noticia</h2>
                        <img src={boton_agregar} alt="agregar"></img>
                    </Link>
                </div>
            </div>
            <NoticiaInfo/>
            <NoticiaInfo/>
            <NoticiaInfo/>
            <NoticiaInfo/>
            
        </>
    )
}

export default Noticia;