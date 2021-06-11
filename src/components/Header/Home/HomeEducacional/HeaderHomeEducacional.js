import React from 'react';
import { Link } from 'react-router-dom';
import DownloadImg from '../../../../icons/Home/HomeEducacional/download-4.svg';
import EstrelaImg from '../../../../icons/Home/HomeEducacional/favorite.png';
import EstrelaImg02 from '../../../../icons/Home/HomeEducacional/favorite-1.png';
import './HeaderHomeEducacional.css';

const HeaderHomeEducacional = () => {

    return(
        <header id="headerHomeEducacional" >
            <Link id="botaoComeceAqui" to="#">
                Comece por Aqui
            </Link>
            <div>
                <div id="header-tempo">
                    <img src={DownloadImg} alt=""/>
                    <span>1:01min </span>
                    <img src={DownloadImg} alt=""/>
                    <span>2/4 concluídos</span>
                </div>
                <h1>Comportamento e Finanças</h1>
                <div id="div-avaliacao">
                    <h5>com Mayra de Lima e Alejandro Ortiz</h5>
                    <img src={EstrelaImg} alt=""/>
                    <img src={EstrelaImg} alt=""/>
                    <img src={EstrelaImg} alt=""/>
                    <img src={EstrelaImg} alt=""/>
                    <img className="imgEstrela" src={EstrelaImg02} alt=""/>
                </div>
                <br/>
                <Link id="botaoComecar" to="#">
                    Começar
                </Link>
            </div>            
        </header>
    );
}

export default HeaderHomeEducacional;
