import React from 'react';
import { EbooksData } from './EbooksData';
import { Link } from 'react-router-dom';
import AssistaAgora from '../../../blocos/Home/AssistaAgora/AssistaAgora';
import './Ebooks.css';

const Ebooks = () => {
    return (
        <div id="episodios">
            <h5>Episódios</h5>
            <br />
            {EbooksData.map((item, index) => {
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
                            <h5>{item.titulo}</h5>
                            <p>{item.descricao}</p>
                            <Link to="">{item.link}</Link>
                        </div>
                    </div>
                );
            })}
             <br/><br/>
            <AssistaAgora/>            
        </div>
    );
}

export default Ebooks;
