import React, { useState } from 'react';
import LOGO from '../../../imagens/Home/HomeEducacional/logo-nova-cor 1.svg';
import MenuImagem from '../../../imagens/Home/HomeEducacional/burger-menu.svg';
import SetaImagem from '../../../imagens/Home/HomeEducacional/seta.png';
import Icon1 from '../../../imagens/Home/HomeEducacional/homeatv.svg';
import Icon2 from '../../../imagens/Home/HomeEducacional/schooloff.svg';
import Icon3 from '../../../imagens/Home/HomeEducacional/analisisoff.svg';
import Icon4 from '../../../imagens/Home/HomeEducacional/noticiasoff.svg';
import Icon5 from '../../../imagens/Home/HomeEducacional/mentoriaoff.svg';
import Icon6 from '../../../imagens/Home/HomeEducacional/glossarioff.svg';
import Icon7 from '../../../imagens/Home/HomeEducacional/configoff.svg';
import Icon8 from '../../../imagens/Home/HomeEducacional/ajudaoff.svg';
import Foto from '../../../imagens/Home/HomeEducacional/miniatura-luis-chapadeiro 1.png';
import './MenuLateral.css';
import { Link } from 'react-router-dom';

const Menu = () => {

    const [menu, setMenu] = useState(false);

    const showNavegacao = () => {
        setMenu(!menu);
    }

    return (
        <div id="navegacao">
            <nav id="nav">
                <ul className="ulNav2">
                   
                   <Link to="#" className="menuA">
                        <img className="botaoMenu" src={MenuImagem} alt="menu" onClick={showNavegacao} />
                    </Link>
                   
                    <li className="liEspacoTrans alinharTopo li" >
                        <Link to="/">
                            <img className="bordaImg" src={Icon1} alt="" />
                        </Link>
                    </li>
                    <li className="liEspacoTrans li">
                        <Link to="">
                            <img className="bordaImg" src={Icon2} alt="" />
                        </Link>
                    </li>
                    <li className="liEspacoTrans li">
                        <Link to="">
                            <img className="bordaImg" src={Icon3} alt="" />
                        </Link>
                    </li>
                    <li className="liEspacoTrans li">
                        <Link to="">
                            <img className="bordaImg" src={Icon4} alt="" />
                        </Link>
                    </li>

                    <li className="liEspacoBranco li">
                        <Link to="">
                            <img className="bordaImg" src={Icon5} alt="" />
                        </Link>
                    </li>
                    <li className="liEspacoTrans li">
                        <Link to="">
                            <img className="bordaImg" src={Icon6} alt="" />
                        </Link>
                    </li>

                    <li className="liEspacoBranco li">
                        <Link to="">
                            <img className="bordaImg" src={Icon7} alt="" />
                        </Link>
                    </li>
                    <li className="liEspacoTrans li">
                        <Link to="">
                            <img className="bordaImg" src={Icon8} alt="" />
                        </Link>
                    </li>
                </ul>
            </nav>

            <div id="nav-itens" menus={menu} className={menu ? 'menu menuAtivo' : 'menu'} onClick={showNavegacao}>
                <div id="nav-ul">
                    <ul className="ulNav">
                        <Link className="liEspacoTrans topoLi" to="/">
                            <img className="botaoVoltar" src={SetaImagem} alt="voltar" onClick={showNavegacao} />
                            <Link to="/">
                                <img className="logoNavLateral" src={LOGO} alt="" />
                            </Link>
                        </Link>

                        <li className="liEspacoTrans imgTopo  alinharTopo">
                            <Link to="/">
                                <img className="icon bordaImg" src={Icon1} alt="" />
                                <span className="borda">Home</span>
                            </Link>
                        </li>
                        <li className="liEspacoTrans">
                            <Link>
                                <img className="icon bordaImg" src={Icon2} alt="" />
                                <span className="borda">Aprendizagem</span>
                            </Link>
                        </li>
                        <li className="liEspacoTrans">
                            <Link to="">
                                <img className="icon bordaImg" src={Icon3} alt="" />
                                <span className="borda">Análises</span>
                            </Link>
                        </li>
                        <li className="liEspacoTrans">
                            <Link to="">
                                <img className="icon bordaImg" src={Icon4} alt="" />
                                <span className="borda">Notícias</span>
                            </Link>
                        </li>
                        <li className="liEspaco">
                            <Link to="">
                                <img className="icon bordaImg" src={Icon5} alt="" />
                                <span className="bordaLinha">Mentoria</span>
                            </Link>
                        </li>

                        <li className="liEspacoTrans">
                            <Link to="">
                                <img className="icon bordaImg" src={Icon6} alt="" />
                                <span className="borda">Glossário</span>
                            </Link>
                        </li>

                        <li className="liEspaco">
                            <Link to="">
                                <img className="icon bordaImg" src={Icon7} alt="" />
                                <span className="bordaLinha">Configuração</span>
                            </Link>
                        </li>

                        <li className="liEspacoTrans">
                            <Link to="">
                                <img className="icon bordaImg" src={Icon8} alt="" />
                                <span className="borda">Ajuda</span>
                            </Link>
                        </li>
                        <br /><br />
                        <li className="linhaBorda">
                            <Link className="coluna" to="/">
                                <span className="textoSeguindo">Seguindo</span>
                            </Link>
                        </li>
                        <li className="linhaBorda">
                            <Link className="coluna" to="/">
                                <img className="icon2" src={Foto} alt="" />
                                <span className="nomePessoa">Luis Sales</span>
                            </Link>
                        </li>
                        <li className="linhaBorda">
                            <Link className="coluna" to="">
                                <img className="icon2" src={Foto} alt="" />
                                <span className="nomePessoa">Luis Sales</span>
                            </Link>
                        </li>
                        <li className="linhaBorda">
                            <Link className="coluna" to="">
                                <img className="icon2" src={Foto} alt="" />
                                <span className="nomePessoa">Luis Sales</span>
                            </Link>
                        </li>
                        <li className="linhaBorda">
                            <Link className="coluna" to="">
                                <img className="icon2" src={Foto} alt="" />
                                <span className="nomePessoa">Luis Sales</span>
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default Menu;
