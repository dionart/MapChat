import React from 'react';

import './styles.scss';
import About from '../../components/About';
import SearchPage from '../../components/Search Page';
import Modal from '../../components/Modal';

const ExampleExample: React.FC = () => {
  
  return( 
    <div className="main">
      <SearchPage />
      <About/>
    </div>
    
    );
}

export default ExampleExample;