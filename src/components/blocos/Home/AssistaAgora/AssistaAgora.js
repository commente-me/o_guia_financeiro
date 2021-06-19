import React from 'react';
import Imagem01 from '../../../../imagens/Home/HomeEducacional/shutterstock_795852658.png';
import { Link } from 'react-router-dom';
import './AssistaAgora.css'

const AssistaAgora = () => {
    return(
        <div className="videoPlayContinue">
            <div className="videoContinue">
                <img src={Imagem01} alt=""/>
            </div>
            <div className="videoContinue">
               <Link to="">Continue a playlist Iniciante!</Link>
            <div className="videoTestoContinua">
                <h4>Assista agora a série</h4>&nbsp;&nbsp;
               <p>Planejamento Financeiro</p>
            </div>
               
            </div>
        </div>
    );
}

export default AssistaAgora;
