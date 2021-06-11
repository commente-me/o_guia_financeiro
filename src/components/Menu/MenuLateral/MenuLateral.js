import React, { useState } from 'react';
import LOGO from '../../../imagens/Home/HomeEducacional/logo-nova-cor 1.png';
import MenuImagem from '../../../icons/Menu/burger-menu.svg';
import SetaImagem from '../../../icons/Home/HomeEducacional/seta.png';
import Icon1 from '../../../icons/Home/HomeEducacional/home.png';
import Icon2 from '../../../icons/Home/HomeEducacional/school.png';
import Icon3 from '../../../icons/Home/HomeEducacional/invest-mobile.png';
import Icon4 from '../../../icons/Home/HomeEducacional/home.png';
import Icon5 from '../../../icons/Home/HomeEducacional/home.png';
import Icon6 from '../../../icons/Home/HomeEducacional/home.png';
import Icon7 from '../../../icons/Home/HomeEducacional/home.png';
import Icon8 from '../../../icons/Home/HomeEducacional/home.png';
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
                    <li className="liEspacoTrans">
                        <Link to="#">
                            <img className="botaoMenu" src={MenuImagem} alt="menu" onClick={showNavegacao} />
                        </Link>
                    </li>
                    <li className="liEspacoTrans alinharTopo" >
                        <Link to="/">
                            <img className="bordaImg" src={Icon1} alt="" />
                        </Link>
                    </li>
                    <li className="liEspacoTrans">
                        <Link to="">
                            <img className="bordaImg" src={Icon2} alt="" />
                        </Link>
                    </li>
                    <li className="liEspacoTrans">
                        <Link to="">
                            <img className="bordaImg" src={Icon3} alt="" />
                        </Link>
                    </li>
                    <li className="liEspacoTrans">
                        <Link to="">
                            <img className="bordaImg" src={Icon4} alt="" />
                        </Link>
                    </li>

                    <li className="liEspacoBranco">
                        <Link to="">
                            <img className="bordaImg" src={Icon5} alt="" />
                        </Link>
                    </li>
                    <li className="liEspacoTrans">
                        <Link to="">
                            <img className="bordaImg" src={Icon6} alt="" />
                        </Link>
                    </li>

                    <li className="liEspacoBranco">
                        <Link to="">
                            <img className="bordaImg" src={Icon7} alt="" />
                        </Link>
                    </li>
                    <li className="liEspacoTrans">
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
                            <img className="logoNavLateral" src={LOGO} alt="" />
                      </Link>
                       
                        <li className="liEspacoTrans imgTopo ">
                            <Link to="/">
                                <img className="icon bordaImg"  src={Icon1} alt="" />
                                <span className="borda">Home</span>
                            </Link>
                        </li>
                        <li className="liEspacoTrans">
                            <Link to="">
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
                        <br/><br/>
                        <li className="linhaBorda">
                            <Link className="coluna" to="/">                                
                                <span className="textoSeguindo">Seguindo</span>
                            </Link>
                        </li>
                        <li className="linhaBorda">
                            <Link className="coluna" to="/">
                                <img className="icon2"  src={Foto} alt="" />
                                <span>Nome da Pessoa</span>
                            </Link>
                        </li>
                        <li className="linhaBorda">
                            <Link className="coluna" to="">
                                <img className="icon2" src={Foto} alt="" />
                                <span>Nome da Pessoa</span>
                            </Link>
                        </li>
                        <li className="linhaBorda">
                            <Link className="coluna" to="">
                                <img className="icon2" src={Foto} alt="" />
                                <span>Nome da Pessoa</span>
                            </Link>
                        </li>
                        <li className="linhaBorda">
                            <Link className="coluna" to="">
                                <img className="icon2" src={Foto} alt="" />
                                <span>Nome da Pessoa</span>
                            </Link>
                        </li>
                        <li className="linhaBorda">
                            <Link className="coluna" to="">
                                <img className="icon2" src={Foto} alt="" />
                                <span>Nome da Pessoa</span>
                            </Link>
                        </li>
                        <li className="linhaBorda">
                            <Link className="coluna" to="">
                                <img className="icon2" src={Foto} alt="" />
                                <span>Nome da Pessoa</span>
                            </Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
    );
}

export default Menu;
