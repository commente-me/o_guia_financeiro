import React from 'react';
import Conteudo001HomeEducacional from '../../../components/Conteudo/Home/HomeEducacional/Conteudo001/Conteudo001HomeEducacional';
import Conteudo01HomeEducacional from '../../../components/Conteudo/Home/HomeEducacional/Conteudo01/Conteudo01HomeEducacional';
import Conteudo02HomeEducacional from '../../../components/Conteudo/Home/HomeEducacional/Conteudo02/Conteudo02HomeEducacional';
import Conteudo03HomeEducacional from '../../../components/Conteudo/Home/HomeEducacional/Conteudo03/Conteudo03HomeEducacional';
import Conteudo04HomeEducacional from '../../../components/Conteudo/Home/HomeEducacional/Conteudo04/Conteudo04HomeEducacional';
import Conteudo05HomeEducacional from '../../../components/Conteudo/Home/HomeEducacional/Conteudo05/Conteudo05HomeEducacional';
import Conteudo06HomeEducacional from '../../../components/Conteudo/Home/HomeEducacional/Conteudo06/Conteudo06HomeEducacional';
import MenuLateral from '../../../components/Menu/MenuLateral/MenuLateral';
import MenuTopo from '../../../components/Menu/MenuTopo/MenuTopo';
import './HomeEducacional.css';
import '../../../botaoCarrossel-css/botaoCarrossel.css';
import MenuDados from '../../../components/Menu/MenuDados/MenuDados';
import Footer from '../../../components/Footer/Home/HomeEducacional/Footer';
import HeaderHomeEducacionalCursando from '../../../components/Header/Home/HomeEducacional/HeaderHomeEducacionalCursando';
import MenuExpandido from '../../../components/Menu/MenuExpandido/MenuExpandido';

const HomeEducacional = () => {
    return (
        <div id="homeEducacional">
            <MenuLateral />
            <div id="homeEducacionalPagina">
                <MenuTopo />
                <MenuExpandido/>
                <HeaderHomeEducacionalCursando />
                <Conteudo001HomeEducacional/>
                <Conteudo01HomeEducacional />
                <Conteudo02HomeEducacional />
                <Conteudo03HomeEducacional />
                <Conteudo04HomeEducacional />
                <Conteudo05HomeEducacional />
                <Conteudo06HomeEducacional />
                <Footer />
            </div>
            <MenuDados />
        </div>
    );
}

export default HomeEducacional;
