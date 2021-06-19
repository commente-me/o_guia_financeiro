import React from 'react';
import { LeiaTambemData } from './LeiaTambemData';
import './LeiaTambem.css';
import Carousel from 'react-elastic-carousel';
import { BreakPointsData } from '../../../Breackpoints/Breackpoints';
import '../../../../botaoCarrossel-css/botaoCarrossel.css';

const LeiaTambém = () => {

    return (
        <div id="leiaTambem">
            <Carousel enableSwipe={true} itemsToShow={3} breakPoints={BreakPointsData} pagination={false} >
                {LeiaTambemData.map((item, index) => {
                    return (
                        <div className="leiaTambem">
                            <div key={index} className="leiaTambemDados">
                                <div id="leiaTambem-info">
                                    <h5>{item.titulo}</h5>
                                    <h6>{item.descricao}</h6>
                                    <div id="leiaTambem-identifica">
                                        <img src={item.foto} alt="" />
                                        <h6>{item.nome}</h6>
                                    </div>
                                    <div className="leiatanbemFonte"><p>{item.fonte}</p></div>
                                    <div id="leiaTambem-opcoes">
                                        <div className="assunto-opcao">
                                            <img className="imagensSvgleiaTambem" src={item.icon1} alt="" />
                                            <h6>{item.textoIcon1}</h6>
                                        </div>
                                        <div className="leiaTambem-opcao">
                                            <img src={item.icon2} alt="" />
                                            <h6>{item.textoIcon2}</h6>
                                        </div>
                                        <div className="leiaTambem-opcao">
                                            <img className="imagensSvgAssunto" src={item.icon3} alt="" />
                                            <h6>{item.textoIcon3} min</h6>
                                        </div>
                                        <div className="leiaTambem-opcao">
                                            <img className="imagensSvgAssunto" src={item.icon4} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    );
                })}
                <div className="divSombraLeiaTambem">

                </div>
            </Carousel>
        </div>
    );
}

export default LeiaTambém;
