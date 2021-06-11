import React from 'react';
import PlayList from '../../../../blocos/Home/PlayList/PlayList';
import './Conteudo02HomeEducacional.css';

const Conteudo02HomeEducacional = () => {

    return (
        <div id="conteudo02">
            <div id="titulo-playList">
                <h2>Mercado derivativos (7 séries)</h2>
            </div>
            <br />
            <PlayList />
        </div>
    );
}

export default Conteudo02HomeEducacional;
