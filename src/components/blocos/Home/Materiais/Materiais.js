import React from 'react';
import './Materiais.css';
import Materiais01 from '../../../blocos/Home/Materiais01/Materiais01';
import AssistaAgora from '../../../blocos/Home/AssistaAgora/AssistaAgora';

const Materiais = () => {
    return (
        <div id="episodios">
            <h3>Como tomamos decisões financeiras?</h3>
            <br />
            <Materiais01/>
            <br />
            <h5>Vieses Comportamentais</h5>
            <br />
            <Materiais01/>
            <br/><br/>
            <AssistaAgora/>
        </div>
    );
}

export default Materiais;
