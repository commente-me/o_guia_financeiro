import React from 'react';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import '../../../../../BotaoTabs-css/BotaoTabs.css';
import './Conteudo07HomeEducacionalEpisodio.css';
import Episodios from '../../../../blocos/Home/Episodios/Episodios';
import Materiais from '../../../../blocos/Home/Materiais/Materiais';
import { Link } from 'react-router-dom';
import Ebooks from '../../../../blocos/Home/Ebooks/Ebooks';
import Icon01 from '../../../../../imagens/Home/HomeEducacional/play.svg';
import Icon02 from '../../../../../imagens/Home/HomeEducacional/fileFiled.svg';
import Icon03 from '../../../../../imagens/Home/HomeEducacional/pdf.svg';

const ConteudoHomeEducacionalEpisodio = () => {

    const [selecionaTab, setSelecionaTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setSelecionaTab(newValue);
    };

    return (
        <div className="tabNavegacao">
            <AppBar color="transparent" position="static">
                <Tabs value={selecionaTab} onChange={handleChange}>
                    <Tab icon={<img className="imgsTabs" src={Icon01} alt=""/>} label="Episódios" />
                    <Tab icon={<img className="imgsTabs" src={Icon02} alt=""/>} label="Materiais complementares" />
                    <Tab icon={<img className="imgsTabs" src={Icon03} alt=""/>} label="E-books" />
                </Tabs>
            </AppBar>
            {selecionaTab === 0 && <Episodios/>}
            {selecionaTab === 1 && <Materiais/>}
            {selecionaTab === 2 && <Ebooks/>}
            <br/>
            <div className="tagsEpisodio">
                <br/><br/><br/><br/>
                <h5>Tags</h5>
                <div className="TagsDosEpisodios">
                <Link to="">
                    Comportamento
                </Link>
                <Link to="">
                    Iniciante
                </Link>
                <Link to="">
                    Contemporâneo
                </Link>
                </div>
            </div>       
        </div>
    );
}

export default ConteudoHomeEducacionalEpisodio;
