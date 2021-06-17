import React from 'react';
import TempoImg from '../../../../imagens/Home/HomeEducacional/clock3.svg';
import DownloadImg from '../../../../imagens/Home/HomeEducacional/download-4.svg';
import EstrelaImg from '../../../../imagens/Home/HomeEducacional/favorite-verde.svg';
import EstrelaImg02 from '../../../../imagens/Home/HomeEducacional/favorite-verde2.svg';
import './HeaderHomeEducacionalEpisodio1.css';

const HeaderHomeEducacionalEpisodio1 = () => {

    return (
        <header id="headerHomeEducacionaEpsodio1" >
            <div id="headerEpsodio1">                
                <h1>Comportamento e Finanças</h1>
                <div id="div-avaliacaoEpsodio1">
                    <h5>com Mayra de Lima e Alejandro Ortiz</h5>
                    <img src={EstrelaImg} alt="" />
                    <img src={EstrelaImg} alt="" />
                    <img src={EstrelaImg} alt="" />
                    <img src={EstrelaImg} alt="" />
                    <img className="imgEstrela1" src={EstrelaImg02} alt="" />
                    <div id="header-tempoEpsodio1">
                        <img src={DownloadImg} alt="" />
                        <span>2/4 concluídos</span>
                    </div>
                </div>
                <br/>
                <div className="headerEpisodiosVideos">
                    <div className="headerDadosVideo01">
                        <iframe className="dadosVideoIFrame" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="headerDadosVideo02">
                        <div className="dadosVideo">
                            <img src={TempoImg} alt="" />
                            <p>Vieses Comportamentais</p>
                            <p>15:00m</p>
                            <img src={TempoImg} alt=""/>
                        </div>
                    </div>
                </div>                
            </div>
        </header>
    );
}

export default HeaderHomeEducacionalEpisodio1;
