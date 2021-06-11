import React from 'react';
import { Link } from 'react-router-dom';
import './PlayListOrdem.css';
import { PlayListOrdemData } from '../PlayListOrdem/PlayListOrdemData';
import Carousel from 'react-elastic-carousel';
import {BreakPointsData} from '../../../Breackpoints/Breackpoints';

const PlayListOrdem = () => {
    return (
        <div id="conteudoPlayListOrdem">
            <div id="div-playlistOrdem">
                <Carousel breakPoints={BreakPointsData} pagination={false}>
                    {PlayListOrdemData.map((item, index) => {
                        return (
                            <div key={index} id="playListOrdem" style={{
                                background: `linear-gradient( 180deg,
                                    rgba(255,255,255, 0.5),
                                    rgba(0,0,0, 0.6),
                                    rgba(0,0,0, 0.7)
                                  ),url(${item.imagem})`
                            }}>
                                <div id="div-icons">
                                    <img src={item.icon1} alt="" />
                                    <img src={item.icon2} alt="" />
                                    <img src={item.icon3} alt="" />
                                </div>
                                <div id="div-identificacao">
                                    <div id="div-ordem">
                                        <h1>{item.ordem}</h1>
                                    </div>
                                    <div id="div-conteudo">
                                        <div id="div-estrela">
                                            <img src={item.estrela1} alt="" />
                                            <img src={item.estrela2} alt="" />
                                            <img src={item.estrela3} alt="" />
                                            <img src={item.estrela4} alt="" />
                                            <img className="imgEstrela" src={item.estrela5} alt="" />
                                        </div>
                                        <Link id="botao-serie" to="">
                                            <img src={item.iconSerie} alt="" />
                                            <h5>{item.textoSerie}</h5>
                                        </Link>
                                        <div id="div-texto">
                                            <h4>{item.titulo}</h4>
                                            <h6>{item.epsodios} epsódios</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </div>
    );
}

export default PlayListOrdem;
