import React from 'react';
import LOGO from '../../../imagens/Home/HomeEducacional/logo-nova-cor 1.svg';
import './MenuTopo.css';
import { Link } from 'react-router-dom';

const MenuTopo = () => {

    return (
        <nav id="nav-topo" >
            <Link to="/">
                <img className="logo" src={LOGO} alt="" />
            </Link>
            <div className="dadosUsuario">
                <h6>Terça-feira - 20/04/2021</h6>
                <h3>Bom dia Fulano!</h3>
            </div>            
        </nav>
    );
}

export default MenuTopo;
