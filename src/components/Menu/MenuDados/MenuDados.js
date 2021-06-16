import React, { useState } from "react";
import SetaImagem from '../../../imagens/Home/HomeEducacional/seta.png';
import SearchImg from '../../../imagens/Home/HomeEducacional/lupa.svg';
import Search02Img from '../../../imagens/Home/HomeEducacional/search01.svg';
import SetaBaixoImg from '../../../imagens/Home/HomeEducacional/chevron-down.svg';
import BookmarkImg from '../../../imagens/Home/HomeEducacional/bookmark.svg';
import SinoImg from '../../../imagens/Home/HomeEducacional/sino.svg';
import UsuarioImg from '../../../imagens/Home/HomeEducacional/user.svg';
import ArrowImg from '../../../imagens/Home/HomeEducacional/arrow.svg';
import { Link } from 'react-router-dom';
import './MenuDados.css';
import MenuExpandido from "../MenuExpandido/MenuExpandido";

const MenuDados = () => {

    const [opcoes, setOpcoes] = useState(false);
    const [opcoes1, setOpcoes1] = useState(false);
    const [voltar, setVoltar] = useState(SetaImagem);
    const [buscar, setBuscar] = useState(false);

    const showOpcoes = () => {
        if (!voltar) {
            setVoltar(SetaImagem);
        } else {
            setVoltar(SetaImagem);
        }
        setOpcoes(!opcoes);
        setOpcoes1(!opcoes1);
    }

    const showInputBusca = () => {
        setBuscar(!buscar);
    }

    return (
        <div className={opcoes1 ? "menuTopoDados menuAtiva" : "menuTopoDados"}>            
            <div id="divTopoMenu">
                <div className="divTopo">
                    <div className="alinhaInput">
                        <input type="text" name="busca" placeholder="Digite a sua busca" />
                        <Link to="">
                            <img src={Search02Img} alt="Buscar" />
                        </Link>
                    </div>
                    <Link to="" onClick={showInputBusca}>
                        <img src={SearchImg} alt="Buscar" />
                    </Link>
                    <Link to="#">
                        <img src={BookmarkImg} alt="" />
                    </Link>
                    <Link className="contadorSino" to="#">
                        <img src={SinoImg} alt="" />
                        <p className="contador">4</p>
                    </Link>
                    <Link to="#">
                        <img src={UsuarioImg} alt="" />
                    </Link>
                </div>
            </div>            
            <MenuExpandido/>
            <div id="botao-opcoes">
                <Link to="#" onClick={showOpcoes}>
                    <img src={voltar} alt="" />
                    <h5>Fique<br />Atualizado</h5>
                </Link>
            </div>
            <div className={opcoes ? "div-topo-opcao opcaoAtiva" : "div-topo-opcao"}>
                <div className="linhaDados">
                    <Link className="textoLink" to="#">
                        <div className="centralizarTexto">
                            <h6>ITUB4</h6>
                        </div>
                    </Link>
                    <Link className="textoLink" to="#">
                        <div className="centralizarTexto">
                            <h6>R$26,86</h6>
                        </div>
                    </Link>
                    <Link className="textoLink" to="#">
                        <div className="centralizarTexto">
                            <img src={ArrowImg} alt="" />
                            <h6>0,83%</h6>
                        </div>
                    </Link>
                    <Link className="textoLink" to="#">
                        <div className="centralizarTexto">
                            <h6>MGLU3</h6>
                        </div>
                    </Link>
                </div>
                <br />
                <div className="botaoNoticias">
                    <select className="selectNoticias">
                        <option>Notícias</option>
                    </select>
                    <img src={SetaBaixoImg} alt="" />
                </div>
                <br />
                <Link className="textoLink" to="#">
                    <h4>IPCA: uma surpresa amarga para 2021</h4>
                    <h5>Inflação de 2% (ou mais) ao mês, chegando nos 30% ao Lorem ipsum dolor sit amet[...]</h5>
                    <h6>Terraco Econômico - 12/04/2021</h6>
                </Link>
                <Link className="textoLink" to="#">
                    <h4>IPCA: uma surpresa amarga para 2021</h4>
                    <h5>Inflação de 2% (ou mais) ao mês, chegando nos 30% ao Lorem ipsum dolor sit amet[...]</h5>
                    <h6>Terraco Econômico - 12/04/2021</h6>
                </Link>
                <Link className="textoLink" to="#">
                    <h4>IPCA: uma surpresa amarga para 2021</h4>
                    <h5>Inflação de 2% (ou mais) ao mês, chegando nos 30% ao Lorem ipsum dolor sit amet[...]</h5>
                    <h6>Terraco Econômico - 12/04/2021</h6>
                </Link>
                <Link className="textoLink" to="#">
                    <h4>IPCA: uma surpresa amarga para 2021</h4>
                    <h5>Inflação de 2% (ou mais) ao mês, chegando nos 30% ao Lorem ipsum dolor sit amet[...]</h5>
                    <h6>Terraco Econômico - 12/04/2021</h6>
                </Link>
            </div>

        </div>
    );
}

export default MenuDados;
