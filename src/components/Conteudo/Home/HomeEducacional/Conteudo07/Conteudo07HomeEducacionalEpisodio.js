import React from 'react';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import '../../../../../BotaoTabs-css/BotaoTabs.css';
import './Conteudo07HomeEducacionalEpisodio.css';
import Episodios from '../../../../blocos/Home/Episodios/Episodios';
import Materiais from '../../../../blocos/Home/Materiais/Materiais';
import { Link } from 'react-router-dom';
import Ebooks from '../../../../blocos/Home/Ebooks/Ebooks';

const ConteudoHomeEducacionalEpisodio = () => {

    const [selecionaTab, setSelecionaTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setSelecionaTab(newValue);
    };

    return (
        <div className="tabNavegacao">
            <AppBar color="transparent" position="static">
                <Tabs value={selecionaTab} onChange={handleChange}>
                    <Tab label="Episódios" />
                    <Tab label="Materiais complementares" />
                    <Tab label="E-books" />
                </Tabs>
            </AppBar>
            {selecionaTab === 0 && <Episodios/>}
            {selecionaTab === 1 && <Materiais/>}
            {selecionaTab === 2 && <Ebooks/>}
            <br/>
            <div className="tagsEpisodio">
                <br/><br/><br/><br/>
                <h5>Tags</h5>
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
    );
}

export default ConteudoHomeEducacionalEpisodio;
