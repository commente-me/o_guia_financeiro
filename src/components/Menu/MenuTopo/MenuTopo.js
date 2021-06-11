import React, { useState } from 'react';
import LOGO from '../../../imagens/Home/HomeEducacional/logo-nova-cor 1.png';
import SetaImagem from '../../../icons/Home/HomeEducacional/seta.png';
import SearchImg from '../../../icons/Home/HomeEducacional/search.svg';
import BookmarkImg from '../../../icons/Home/HomeEducacional/bookmark.svg';
import { Link } from 'react-router-dom';
import './MenuTopo.css';

const MenuTopo = () => {

    const [opcoes, setOpcoes] = useState(false);
    const [voltar, setVoltar] = useState(SetaImagem);

    const showOpcoes = () => {
        if (!voltar) {
            setVoltar(SetaImagem);
        } else {
            setVoltar(SetaImagem);
        }
        setOpcoes(!opcoes);
    }

    return (
        <nav id="nav-topo">
            <img className="logo" src={LOGO} alt="" />
            <div id="div-nav-topo">
                <div className="div-topo">
                    <Link to="#">
                        <img src={SearchImg} alt="" />
                    </Link>
                    <Link to="#">
                        <img src={BookmarkImg} alt="" />
                    </Link>
                    <Link to="#">
                        <img src={SearchImg} alt="" />
                    </Link>
                    <Link to="#">
                        <img src={BookmarkImg} alt="" />
                    </Link>
                </div>
                <div id="botao-opcoes">
                    <Link to="#" onClick={showOpcoes}>
                        <img src={voltar} alt="" />
                        <h5>Fique<br />Atualizado</h5>
                    </Link>
                </div>
                <div className={opcoes ? "div-topo-opcao opcaoAtiva" : "div-topo-opcao"} onClick={showOpcoes}>
                    <div className="linhaDados">
                        <Link className="textoLink" to="#">
                            <h6>Texto</h6>
                        </Link>
                        <Link className="textoLink" to="#">
                            <h6>2/2</h6>
                        </Link>
                        <Link className="textoLink" to="#">
                            <h6>Texto</h6>
                        </Link>
                        <Link className="textoLink" to="#">
                            <h6>2/14</h6>
                        </Link>
                        <Link className="textoLink" to="#">
                            <h6>500</h6>
                        </Link>
                        <Link className="textoLink" to="#">
                            <h6>Texto</h6>
                        </Link>
                        <Link className="textoLink" to="#">
                            <h6>15h</h6>
                        </Link>
                        <Link className="textoLink" to="#">
                            <h6>Texto</h6>
                        </Link>
                    </div>
                    <Link className="textoLink" to="#">
                        <h4>Título</h4>
                        <h5>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto</h5>
                        <h6>Texto 14/06/2021</h6>
                    </Link>
                    <Link to="#">
                        <h4>Título</h4>
                        <h5>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto</h5>
                        <h6>Texto 14/06/2021</h6>
                    </Link>
                    <Link to="#">
                        <h4>Título</h4>
                        <h5>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto</h5>
                        <h6>Texto 14/06/2021</h6>
                    </Link>
                    <Link to="#">
                        <h4>Título</h4>
                        <h5>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto</h5>
                        <h6>Texto 14/06/2021</h6>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default MenuTopo;
