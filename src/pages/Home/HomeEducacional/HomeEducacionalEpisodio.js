import React from 'react';
import Conteudo07HomeEducacionalEpisodio from '../../../components/Conteudo/Home/HomeEducacional/Conteudo07/Conteudo07HomeEducacionalEpisodio';
import HeaderHomeEducacionalEpisodio from '../../../components/Header/Home/HomeEducacional/HeaderHomeEducacionalEpisodio';
import MenuLateral from '../../../components/Menu/MenuLateral/MenuLateral';
import MenuTopo from '../../../components/Menu/MenuTopo/MenuTopo';
import './HomeEducacionalEpisodio.css';
import '../../../botaoCarrossel-css/botaoCarrossel.css';
import MenuDados from '../../../components/Menu/MenuDados/MenuDados';
import Footer from '../../../components/Footer/Home/HomeEducacional/Footer';
import Assuntos from '../../../components/blocos/Home/Assuntos/Assuntos';
import PlayList from '../../../components/blocos/Home/PlayList/PlayList';

const HomeEducacionalEpisodio = () => {
    return (
        <div id="homeEducacional">
            <MenuLateral />
            <div id="homeEducacionalPagina">
                <MenuTopo />
                <HeaderHomeEducacionalEpisodio />
                <Conteudo07HomeEducacionalEpisodio/>
                <div id="playListEpisodios01" className="playListEpisodios">
                    <br/>
                    <h4>Séries relacionadas</h4>
                    <br/>
                    <PlayList/>
                </div>
                
                <div id="playListEpisodios02" className="playListEpisodios">
                    <br/><br/>
                    <h4>Assuntos relacionados</h4>
                    <br/>
                    <Assuntos/>
                    <br/>
                    <br/>
                </div>
                <Footer />
            </div>
            <MenuDados />
        </div>
    );
}

export default HomeEducacionalEpisodio;
