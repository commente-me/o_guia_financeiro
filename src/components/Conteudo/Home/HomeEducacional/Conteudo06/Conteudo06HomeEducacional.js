import React from 'react';
import { Link } from 'react-router-dom';
import LeiaTambem from '../../../../blocos/Home/LeiaTambem/LeiaTambem';
import './Conteudo06HomeEducacional.css';
import SetaImg from '../../../../../imagens/Home/HomeEducacional/chevron-right.svg';

const Conteudo06HomeEducacional = () => {
    return(
        <div id="conteudo06">
            <div id="titulo06">  
            <br/><br/><br/>              
                <h2>Leia também</h2>
                <Link to="">
                    <h6>Ver todos</h6>
                    <img src={SetaImg} alt=""/>    
                </Link>                
            </div>
            <br/>
            <LeiaTambem/>
            <br/>
        </div>
    );
}

export default Conteudo06HomeEducacional;
