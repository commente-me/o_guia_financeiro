import React from 'react';
import { VideosData } from '../Videos/VideosData';
import Carousel from 'react-elastic-carousel';
import {BreakPointsData} from '../../../Breackpoints/Breackpoints';
import './Videos.css';

const Videos = () => {
    return(
        <div id="playListVideos">
            <div id="playListVideos">
                <Carousel itemsToShow={3} breakPoints={BreakPointsData} pagination={false}>
                    {VideosData.map((item, index) => {
                        return (
                            <div key={index} id="divVideos" style={{background: `linear-gradient( 180deg,
                                rgba(0,0,0, 0.6),
                                rgba(0,0,0, 0.2),
                                rgba(0,0,0, 0.2),
                                rgba(0,0,0, 0.6)
                              ),url(${item.imagem})`}}>
                                <div className="videos-icons">
                                    <img src={item.icon1} alt="" />
                                    <img src={item.icon2} alt="" />
                                </div>
                                <div className="videos-texto"> 
                                    <div className="videos-tempo">                                        
                                        <img src={item.icon3} alt="" />
                                        <p>{item.textoIcon3} min</p>
                                    </div>                                   
                                    <div className="videos-titulo">
                                        <h5>{item.id}. {item.titulo}</h5>
                                    </div>
                                </div>
                                <div className="videos-barra"></div>
                            </div>                            
                        );
                    })}
                </Carousel>
            </div>
        </div>
    );
}

export default Videos;
