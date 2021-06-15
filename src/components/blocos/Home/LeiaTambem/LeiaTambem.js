import React from 'react';
import { LeiaTambemData } from './LeiaTambemData';
import './LeiaTambem.css';
import Carousel from 'react-elastic-carousel';
import { BreakPointsData } from '../../../Breackpoints/Breackpoints';
import '../../../../botaoCarrossel-css/botaoCarrossel.css';

const LeiaTambém = () => {

    return (
        <div id="leiaTambem">
            <Carousel itemsToShow={3} breakPoints={BreakPointsData} pagination={false}>
                {LeiaTambemData.map((item, index) => {
                   return (
                        <div key={index} className="leiaTambem">
                            <div className="leiaTambemCol01">
                                {/* <div className="leiaTambemImagem">
                                    <img src={item.imagem} alt="" />
                                </div> */}
                                <div className="leiaTambemDados">
                                    <h5>{item.titulo}</h5>
                                    <br />
                                    <h6>{item.descricao}</h6>
                                    <div className="leiaTambemFoto">
                                        <img src={item.foto} alt="" />
                                        <h6>{item.nome}</h6>
                                    </div>
                                    <p>{item.fonte}</p>
                                </div>
                            </div>
                            <div className="leiaTambemOpcoes">
                                <div className="leiaTambemOpcao">
                                    <img src={item.icon1} alt="" />
                                    <h6>{item.textoIcon1}</h6>
                                </div>
                                <div className="leiaTambemOpcao">
                                    <img src={item.icon2} alt="" />
                                    <h6>{item.textoIcon2}</h6>
                                </div>
                                <div className="leiaTambemOpcao">
                                    <img src={item.icon3} alt="" />
                                    <h6>{item.textoIcon3} min</h6>
                                </div>
                                <div className="leiaTambemOpcao">
                                    <img src={item.icon4} alt="" />
                                </div>
                            </div>
                        </div>
                    ); 
                })}
            </Carousel>
        </div>
    );
}

export default LeiaTambém;
