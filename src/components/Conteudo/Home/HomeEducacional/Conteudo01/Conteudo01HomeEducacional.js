import React from 'react';
import PlayListOrdem from '../../../../blocos/Home/PlayListOrdem/PlayListOrdem';
import '../ConteudosHomeEducacional.css';

const Conteudo01HomeEducacional = () => {
    return (
        <div className="conteudo">
            <div id="titulo">
                <h2>Playlist que montamos para você (5 séries)</h2>
                <h5>Conclua o playlist na ordem sugerida para uma melhor aprendizagem.</h5>
            </div>
            <PlayListOrdem />
        </div>
    );
}

export default Conteudo01HomeEducacional;
