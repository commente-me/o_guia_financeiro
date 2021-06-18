import React from 'react';
import './Materiais01.css';
import { Link } from 'react-router-dom';

const Materiais01 = () => {
    return (
        <div className="Materiais">
            <div className="episodiosMateriais">
                <div id="divEpisodioM">
                    <h6>Links úteis</h6>
                </div>
                <div class="textoEpisodiosM">
                    <h6>O Guia Financeiro</h6>
                    <Link to="">https://www.oguiafinanceiro.com.br/</Link>
                </div>
            </div>

            <div className="episodiosMateriais">
                <div id="divEpisodioM">
                    <h6>Vídeos</h6>
                </div>
                <div class="textoEpisodiosM">
                    <h6>Estelle Gibson: The true cost of financial dependence | TED Talk</h6>
                    <Link to="">https://www.ted.com/talks/estelle_gibson_the_true_cost_of_financial_dependence</Link>
                </div>
            </div>

            <div className="episodiosMateriais">
                <div id="divEpisodioM">
                    <h6>Literatura</h6>
                </div>
                <div class="textoEpisodiosM">
                    <h6>O Poder do Hábito – Por que fazemos o que fazemos na vida e nos negócios (Charles Duhigg)<br /><br />Finanças Comportamentais (Aquiles Mosca)<br /><br />5 Dicas para colocar suas finanças em ordem</h6>
                    <Link to="">https://www.oguiafinanceiro.com.br/</Link>
                </div>
            </div>

            <div className="episodiosMateriais">
                <div id="divEpisodioM">
                    <h6>Ferramentas</h6>
                </div>
                <div class="textoEpisodiosM">
                    <h6>Calculadora de Rendimentos</h6>
                    <Link to="">https://medium.com/o-prospero-passo/5-dicas-para-colocar-suas-finan%C3%A7as-em-ordem-6defbeced9a8</Link>
                </div>
            </div>
        </div>
    );
}

export default Materiais01;
