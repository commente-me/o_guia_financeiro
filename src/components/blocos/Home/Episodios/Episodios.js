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
                    <div className="TodosEpisodios">
                        <div key={index} className="episodios">
                            <div id="divEpisodio" style={{
                                background: `linear-gradient( 180deg,
                            rgba(0,0,0, 0.9),
                            rgba(0,0,0, 0.3),
                            rgba(0,0,0, 0.3),
                            rgba(0,0,0, 0.9)
                        ),url(${item.imagem})`
                            }}>
                                <div className="episodioTodosIcons">
                                    <div className="iconEpisodio">
                                        <div className="IconsDownload">
                                            <img src={item.iconDownload} alt="" />
                                            <img src={item.iconRelogio} alt="" />
                                            <p>15 min</p>
                                        </div>
                                        <img className="iconBandeira" src={item.icon} alt="" />
                                    </div>
                                    <div className="iconEpisodioAcoes">
                                        <img className="imgCadeado" src={item.iconCadeado} alt="" />
                                        <img className="imgPlay" src={item.iconPlay} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="textoEpisodios">
                            <div className="IconsTitulo">
                                <h5>{item.id}. {item.titulo}</h5>
                                <div className="IconsDownload02">
                                    <img src={item.iconDownload} alt="" />
                                    <img src={item.iconRelogio} alt="" />
                                    <p>15 min</p>
                                </div>
                            </div>
                            <p>{item.descricao}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Episodios;
