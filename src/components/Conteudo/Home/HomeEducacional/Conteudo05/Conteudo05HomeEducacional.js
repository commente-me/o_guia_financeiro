import React from 'react';
import Assuntos from '../../../../blocos/Home/Assuntos/Assuntos';
import '../ConteudosHomeEducacional.css';

const Conteudo05HomeEducacional = () => {
    return(
        <div id="conteudo05">
            <div id="titulo05">
                <h2>Assuntos indicados para você</h2>                
            </div>
            <br/>
            <Assuntos/>
        </div>
    );
}

export default Conteudo05HomeEducacional;
