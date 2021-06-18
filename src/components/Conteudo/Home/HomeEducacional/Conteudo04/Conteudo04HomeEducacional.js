import React from 'react';
import PlayList from '../../../../blocos/Home/PlayList/PlayList';
import '../ConteudosHomeEducacional.css';

const Conteudo04HomeEducacional = () => {
    return(
        <div className="conteudo">
            <div id="titulo">
                <h2>Investimentos (5 séries)</h2>                
            </div>
            <br/>
            <PlayList/>
        </div>
    );
}

export default Conteudo04HomeEducacional;
