import React from 'react';
import { PlayListData } from '../PlayList/PlayListData';
import Carousel from 'react-elastic-carousel';
import './PlayList.css';
import {BreakPointsData} from '../../../Breackpoints/Breackpoints';

const PlayList = () => {
    return (
        <div id="playList-conteudo">
            <div id="playList">
                <Carousel itemsToShow={3} breakPoints={BreakPointsData} pagination={false} showArrows={true}>
                    {PlayListData.map((item, index) => {
                        return (
                            <div key={index} id="div-playList" style={{background: `linear-gradient( 180deg,
                                rgba(0,0,0, 0.8),
                                rgba(0,0,0, 0.2),
                                rgba(0,0,0, 0.2),
                                rgba(0,0,0, 0.8) 
                              ),url(${item.imagem})`}}>
                                <div id="playList-icons">
                                    <img src={item.icon1} alt="" />
                                    <img src={item.icon2} alt="" />
                                    <img src={item.icon3} alt="" />
                                </div>
                                <div id="playList-texto">
                                    <div id="playListestrelas">
                                        <img src={item.estrela1} alt="" />
                                        <img src={item.estrela2} alt="" />
                                        <img src={item.estrela3} alt="" />
                                        <img src={item.estrela4} alt="" />
                                        <img className="imgEstrela" src={item.estrela5} alt="" />
                                    </div>
                                    <div id="playList-titulo">
                                        <h5>{item.titulo}</h5>
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

export default PlayList;
