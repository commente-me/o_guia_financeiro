import React from 'react';
import { Link } from 'react-router-dom';
import TempoImg from '../../../../imagens/Home/HomeEducacional/Ellipse1.svg';
import DownloadImg from '../../../../imagens/Home/HomeEducacional/episodios.svg';
import VoltarImg from '../../../../imagens/Home/HomeEducacional/chevron-left.svg';
import EstrelaImg from '../../../../imagens/Home/HomeEducacional/favorite-verde.svg';
import EstrelaImg02 from '../../../../imagens/Home/HomeEducacional/favorite-verde2.svg';
import './HeaderHomeEducacionalEpisodio.css';

const HeaderHomeEducacionalEpisodio = () => {

    return (
        <header id="headerHomeEducacionaEpsodio" >
            <div>
                <Link id="botaoVoltarHeader" to="/">
                    <img src={VoltarImg} alt="" />
                    Voltar
                </Link>
                <h1>Comportamento e Finanças</h1>
                <div id="div-avaliacaoEpsodio">
                    <h5>com Mayra de Lima e Alejandro Ortiz</h5>
                    <img src={EstrelaImg} alt="" />
                    <img src={EstrelaImg} alt="" />
                    <img src={EstrelaImg} alt="" />
                    <img src={EstrelaImg} alt="" />
                    <img className="imgEstrela" src={EstrelaImg02} alt="" />
                    <div id="header-tempoEpsodio">
                        <img style={{width: '18px!important'}} src={TempoImg} alt="" />
                        <span style={{marginRight: '30px'}}>1:01min </span>
                        <img style={{width: '18px!important'}} src={DownloadImg} alt="" />
                        <span>2/4 concluídos</span>
                    </div>
                </div>
                <br />
                <h3>Um resumo sobre o que o usuário encontratá nesta série em até três linhas. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Duis aute irure dolor in reprehenderit in voluptate velit.</h3>
                <br/>
            </div>
        </header>
    );
}

export default HeaderHomeEducacionalEpisodio;
