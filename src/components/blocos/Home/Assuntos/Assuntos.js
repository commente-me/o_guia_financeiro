import React from 'react';
import { AssuntosData } from './AssuntosData';
import './Assuntos.css';
import Carousel from 'react-elastic-carousel';
import { BreakPointsData } from '../../../Breackpoints/Breackpoints';
import '../../../../botaoCarrossel-css/botaoCarrossel.css';

const Assuntos = () => {

    return (
        <div id="assuntos">
            <Carousel enableSwipe={true} itemsToShow={3} breakPoints={BreakPointsData} pagination={false} showArrows={true}>
                {AssuntosData.map((item, index) => {
                    return (
                        <div className="assuntos">

                            <div key={index} className="assuntosDados">
                                <div id="assunto-banner" style={{ background: `url(${item.imagem})` }}>
                                    <img src={item.icon1} alt="" />
                                </div>
                                <div id="assunto-info">
                                    <h5>{item.titulo}</h5>
                                    <h6>{item.descricao}</h6>
                                    <div id="assunto-identifica">
                                        <img src={item.foto} alt="" />
                                        <h6>{item.nome}</h6>
                                    </div>
                                    <div id="assunto-opcoes">
                                        <div className="assunto-opcao">
                                            <img className="imagensSvgAssunto" src={item.icon2} alt="" />
                                            <h6>{item.textoIcon2}</h6>
                                        </div>
                                        <div className="assunto-opcao">
                                            <img src={item.icon3} alt="" />
                                            <h6>{item.textoIcon3}</h6>
                                        </div>
                                        <div className="assunto-opcao">
                                            <img className="imagensSvgAssunto" src={item.icon4} alt="" />
                                            <h6>{item.textoIcon4} min</h6>
                                        </div>
                                        <div className="assunto-opcao">
                                            <img className="imagensSvgAssunto" src={item.icon5} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    );
                })}
                <div className="divSombraAssuntos">

                </div>
            </Carousel>
        </div>
    );
}

export default Assuntos;
