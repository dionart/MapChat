import React, { useState } from 'react';

import './styles.scss';
import world from '../../images/world.svg'
import satelite from '../../images/satelite.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const About: React.FC = () => {
  
  return (
    <div id = "second-page">
        <div className="container-fluid">
            
            <div className="description-container">
                <a>Sobre o site</a>
                <p>Map Chat é uma ferramenta de pesquisa e feedback sobre bairros e zonas da grande João Pessoa. Faça login para selecionar o seu bairro e enviar um feedback sobre possíveis melhorias na área.</p>
                <img className = "satelite" src = {satelite}/>
                <img className = "satelite2" src = {satelite}/>
            </div>

            <div className = "image-container">
                <img src = {world}/>
            </div>

        </div>
        
    </div>
    
  );
};

export default About;