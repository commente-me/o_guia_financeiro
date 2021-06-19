import React from 'react';
import { Link } from 'react-router-dom';
import TempoImg from '../../../../imagens/Home/HomeEducacional/Ellipse1.svg';
import DownloadImg from '../../../../imagens/Home/HomeEducacional/episodios.svg';
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
                    <img style={{width: '18px!important'}} src={TempoImg} alt=""/>
                    <span style={{marginRight: '30px'}}>1:01min </span>
                    <img style={{width: '18px!important'}} src={DownloadImg} alt=""/>
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
                <br/>
            </div>            
        </header>
    );
}

export default HeaderHomeEducacionalCursando;
