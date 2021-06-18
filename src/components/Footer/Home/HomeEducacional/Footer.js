import React from 'react';
import './Footer.css';
import LOGO from '../../../../imagens/Home/HomeEducacional/logo-nova-cor 1.svg';
import Icon1 from '../../../../imagens/Home/HomeEducacional/Facebook.svg';
import Icon2 from '../../../../imagens/Home/HomeEducacional/Linkedin.svg';
import Icon3 from '../../../../imagens/Home/HomeEducacional/Youtube.svg';
import Icon4 from '../../../../imagens/Home/HomeEducacional/Twitter.svg';
import Icon5 from '../../../../imagens/Home/HomeEducacional/Instagram.svg';
import Icon6 from '../../../../imagens/Home/HomeEducacional/Soundcloud.svg';
import Icon7 from '../../../../imagens/Home/HomeEducacional/Spotify.svg';
import Icon8 from '../../../../imagens/Home/HomeEducacional/Itunes.svg';
import GooglePlayImg from '../../../../imagens/Home/HomeEducacional/app1.png';
import ApleImg from '../../../../imagens/Home/HomeEducacional/app2.png';
import { Link } from 'react-router-dom';


const Footer = () => {
    return(
        <div className="footerHomeEducacional">
            <div className="footer01">
                <div className="footerColunaLogo">
                    <Link to="">
                        <img src={LOGO} alt=""/>
                    </Link>                    
                </div>
                <div className="footerColuna">
                    <Link to="">
                        <img src={Icon1} alt=""/>
                    </Link>
                    <Link to="">
                        <img src={Icon2} alt=""/>
                    </Link>
                    <Link to="">
                        <img src={Icon3} alt=""/>
                    </Link>
                    <Link to="">
                        <img src={Icon4} alt=""/>
                    </Link>
                    <Link to="">
                        <img src={Icon5} alt=""/>
                    </Link>
                    <Link to="">
                        <img src={Icon6} alt=""/>
                    </Link>
                    <Link to="">
                        <img src={Icon7} alt=""/>
                    </Link>
                    <Link to="">
                        <img src={Icon8} alt=""/>
                    </Link>
                </div>
                <div className="footerColunaApp">
                    <Link to="">
                        <img src={GooglePlayImg} alt=""/>
                    </Link>
                    <Link to="">
                        <img src={ApleImg} alt=""/>
                    </Link>
                </div>
            </div>
            <div className="footer02">
                <div className="footerColuna01">
                    <p>© O Guia Financeiro. Todos os direitos reservados.</p>
                </div>
                <div className="footerColuna02">
                    <div className="FooterCol01">
                    <p>Política de privacidade</p>
                    <p>Política de cookies</p>
                    </div>
                    <div className="FooterCol02">
                    <p>Termos e condições</p>
                    <p>Aviso sobre risco</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;