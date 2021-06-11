import React from 'react';
import PlayList from '../../../../blocos/Home/PlayList/PlayList';
import './Conteudo03HomeEducacional.css';

const Conteudo03HomeEducacional = () => {
    return(
        <div id="conteudo03">
            <div id="titulo-playList">
                <h2>Investimentos (5 séries)</h2>                
            </div>
            <br/>
            <PlayList/>
        </div>
    );
}

export default Conteudo03HomeEducacional;
