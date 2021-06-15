import React from 'react';
import PlayList from '../../../../blocos/Home/PlayList/PlayList';
import '../ConteudosHomeEducacional.css';

const Conteudo02HomeEducacional = () => {

    return (
        <div className="conteudo">
            <div id="titulo">
                <h1>Explore outros conteúdos</h1>
                <h2>Mercado à vista (9 séries)</h2>
            </div>
            <br />
            <PlayList />
        </div>
    );
}

export default Conteudo02HomeEducacional;
