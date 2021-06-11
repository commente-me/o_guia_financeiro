import React from 'react';
import Assuntos from '../../../../blocos/Home/Assuntos/Assuntos';
import './Conteudo04HomeEducacional.css';

const Conteudo03HomeEducacional = () => {
    return(
        <div id="conteudo04">
            <div id="titulo04">
                <h2>Assuntos indicados para você</h2>                
            </div>
            <br/>
            <Assuntos/>
        </div>
    );
}

export default Conteudo03HomeEducacional;
