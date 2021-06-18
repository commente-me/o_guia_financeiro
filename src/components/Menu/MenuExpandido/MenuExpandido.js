import React from 'react';
import UserDetalhes from '../../../imagens/Home/HomeEducacional/user-details.svg';
import InvestMobileImg from '../../../imagens/Home/HomeEducacional/invest-mobile.svg';
import TextImg from '../../../imagens/Home/HomeEducacional/text.svg';
import SchollImg from '../../../imagens/Home/HomeEducacional/school2.svg';
import ChevronRight from '../../../imagens/Home/HomeEducacional/chevron-right.svg';
import Search02Img from '../../../imagens/Home/HomeEducacional/search01.svg';
import { Link } from 'react-router-dom';
import './MenuExpandido.css';

const MenuExpandido = () => {
    return (
        <div className="menuExpandido">
            <ul>
                <li><Link to=""><img src={Search02Img} alt="" /><p>Ação Cheia</p></Link></li>
                <li><Link to=""><img src={Search02Img} alt="" /><p>Ação</p></Link></li>
                <li><Link to=""><img src={UserDetalhes} alt="" /><p>Ações</p></Link></li>
                <li><Link to=""><img src={InvestMobileImg} alt="" /><p>Ações</p></Link></li>
                <li><Link to=""><img src={InvestMobileImg} alt="" /><p>Guia de Ações</p></Link></li>
                <li><Link to=""><img src={TextImg} alt="" /><p>Notícias de Ações</p></Link></li>
                <li><Link to=""><img src={SchollImg} alt="" /><p>Notícias de Ações</p></Link></li>
                <Link to="" className="linkVoltarMenuExpandido">
                    Ver mais
                    <img src={ChevronRight} alt="" />
                </Link>
            </ul>
        </div>
    );
}

export default MenuExpandido;
