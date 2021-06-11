import React from 'react';
import { AssuntosData } from './AssuntosData';
import './Assuntos.css';
import Carousel from 'react-elastic-carousel';
import { BreakPointsData } from '../../../Breackpoints/Breackpoints';

const Assuntos = () => {

    return (
        <div id="assuntos">
            <Carousel breakPoints={BreakPointsData} pagination={false}>
                {AssuntosData.map((item, index) => {
                    return (
                        <div className="assuntos">

                            <div key={index} className="assuntosDados">
                                <div id="assunto-banner" style={{ background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5) ),url(${item.imagem})` }}>
                                    <img src={item.icon1} alt="" />
                                </div>
                                <div id="assunto-info">
                                    <h5>{item.titulo}</h5>
                                    <h6>{item.descricao}</h6>
                                    <div id="assunto-identifica">
                                        <img src={item.foto} alt="" />
                                        <h5>{item.nome}</h5>
                                    </div>
                                    <div id="assunto-opcoes">
                                        <div className="assunto-opcao">
                                            <img src={item.icon2} alt="" />
                                            <h6>{item.textoIcon2}</h6>
                                        </div>
                                        <div className="assunto-opcao">
                                            <img src={item.icon3} alt="" />
                                            <h6>{item.textoIcon3}</h6>
                                        </div>
                                        <div className="assunto-opcao">
                                            <img src={item.icon4} alt="" />
                                            <h6>{item.textoIcon4} min</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
}

export default Assuntos;
