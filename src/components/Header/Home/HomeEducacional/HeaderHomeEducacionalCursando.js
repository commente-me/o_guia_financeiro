import React from 'react';
import { Link } from 'react-router-dom';
import TempoImg from '../../../../imagens/Home/HomeEducacional/clock3.svg';
import DownloadImg from '../../../../imagens/Home/HomeEducacional/download-4.svg';
import EstrelaImg from '../../../../imagens/Home/HomeEducacional/favorite.svg';
import EstrelaImg02 from '../../../../imagens/Home/HomeEducacional/favorite-verde2.svg';
import './HeaderHomeEducacionalCursando.css';

const HeaderHomeEducacionalCursando = () => {

    return(
        <header id="headerHomeEducacional" >
            <Link id="botaoComeceAqui" to="#">
                Comece por Aqui:
            </Link>
            <div className="dadosHeader">
                <div id="header-tempo">
                    <img src={TempoImg} alt=""/>
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
                <Link id="botaoComecar" to="/episodio">
                    Continuar
                </Link>
            </div>            
        </header>
    );
}

export default HeaderHomeEducacionalCursando;