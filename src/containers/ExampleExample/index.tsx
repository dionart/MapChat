import React from 'react';

import './styles.scss';
import About from '../../components/About';
import SearchPage from '../../components/Search Page';
import Navbar from '../../components/Navbar';

const ExampleExample: React.FC = () => {
  
  return( 
    <div className="main">
      <Navbar/>
      <SearchPage />
      <About/>
    </div>
    
    );
}

export default ExampleExample;