import React from 'react';
import { EpisodiosData } from './EpisodiosData';
import './Episodios.css';

const Episodios = () => {
    return (
        <div id="episodios">
            <h5>Episódios</h5>
            <br />
            {EpisodiosData.map((item, index) => {
                return (
                    <div  key={index} className="episodios">
                        <div id="divEpisodio" style={{
                            background: `linear-gradient( 180deg,
                            rgba(0,0,0, 0.4),
                            rgba(0,0,0, 0.2),
                            rgba(0,0,0, 0.2),
                            rgba(0,0,0, 0.4)
                        ),url(${item.imagem})`
                        }}>
                            <div className="iconEpisodio">
                                <img src={item.icon} alt=""/>
                            </div>
                        </div>
                        <div class="textoEpisodios">
                            <h5>{item.id}. {item.titulo}</h5>
                            <p>{item.descricao}</p>
                        </div>
                    </div>
                );
            })}            
        </div>
    );
}

export default Episodios;
