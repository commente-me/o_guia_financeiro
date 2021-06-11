import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeEducacional from '../../pages/Home/HomeEducacional/HomeEducacional';

const Navegacao = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomeEducacional}/>
                <Route path="/home-educacional" component={HomeEducacional}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Navegacao;
