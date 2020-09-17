import React, { useState } from 'react';

import './styles.scss';
import world from '../../images/world.svg'
import satelite from '../../images/satelite.png';

const About: React.FC = () => {
  
  return (
    <div id = "second-page">
        <div className="container-fluid">
            <div className = "image-container">
                <img src = {world}/>
            </div>

            <div className="description-container">
                <a>Map Chat</a>
                <p>Map Chat é uma ferramenta de pesquisa e mensagem entre bairros e zonas da grande João Pessoa. Pesquise seu bairro ou selecione-o no mapa da última página para enviar um feedback sobre possíveis melhorias na área.</p>
                <img className = "satelite" src = {satelite}/>
                <img className = "satelite2" src = {satelite}/>
            </div>

        </div>
        
    </div>
    
  );
};

export default About;