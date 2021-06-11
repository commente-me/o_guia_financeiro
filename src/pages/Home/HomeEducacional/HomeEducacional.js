import React from 'react';
import Conteudo01HomeEducacional from '../../../components/Conteudo/Home/HomeEducacional/Conteudo01/Conteudo01HomeEducacional';
import Conteudo02HomeEducacional from '../../../components/Conteudo/Home/HomeEducacional/Conteudo02/Conteudo02HomeEducacional';
import Conteudo03HomeEducacional from '../../../components/Conteudo/Home/HomeEducacional/Conteudo03/Conteudo03HomeEducacional';
import Conteudo04HomeEducacional from '../../../components/Conteudo/Home/HomeEducacional/Conteudo04/Conteudo04HomeEducacional';
import Conteudo05HomeEducacional from '../../../components/Conteudo/Home/HomeEducacional/Conteudo05/Conteudo05HomeEducacional';
import HeaderHomeEducacional from '../../../components/Header/Home/HomeEducacional/HeaderHomeEducacional';
import MenuLateral from '../../../components/Menu/MenuLateral/MenuLateral';
import MenuTopo from '../../../components/Menu/MenuTopo/MenuTopo';
import './HomeEducacional.css';

const HomeEducacional = () => {
    return(
        <div id="homeEducacional">
            <MenuLateral/>
            <div id="homeEducacionalPagina">                
                <MenuTopo/>
                <HeaderHomeEducacional/>
                <Conteudo01HomeEducacional/>
                <Conteudo02HomeEducacional/>
                <Conteudo03HomeEducacional/>
                <Conteudo04HomeEducacional/>
                <Conteudo05HomeEducacional/>
            </div>
        </div>
    );
}

export default HomeEducacional;
