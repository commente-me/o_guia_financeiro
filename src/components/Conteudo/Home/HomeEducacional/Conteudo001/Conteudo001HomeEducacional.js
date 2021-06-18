import React from 'react';
import Videos from '../../../../blocos/Home/Videos/Videos';
import '../ConteudosHomeEducacional.css';

const Conteudo001HomeEducacional = () => {
    return (
        <div className="conteudo">
            <div id="titulo">
                <h2>Episódios desta série</h2>
            </div>
            <Videos />
        </div>
    );
}

export default Conteudo001HomeEducacional;
