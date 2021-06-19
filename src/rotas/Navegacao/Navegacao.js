import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeEducacional from '../../pages/Home/HomeEducacional/HomeEducacional';
import HomeEducacionalCursando from '../../pages/Home/HomeEducacional/HomeEducacionalCursando';
import HomeEducacionalEpsodio from '../../pages/Home/HomeEducacional/HomeEducacionalEpisodio';
import HomeEducacionalEpsodio1 from '../../pages/Home/HomeEducacional/HomeEducacionalEpisodio1';
const Navegacao = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomeEducacional}/>
                <Route path="/cursando" exact component={HomeEducacionalCursando}/>
                <Route path="/episodio" exact component={HomeEducacionalEpsodio}/>
                <Route path="/episodio1" exact component={HomeEducacionalEpsodio1}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Navegacao;
