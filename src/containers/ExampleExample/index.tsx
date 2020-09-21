import React from 'react';

import './styles.scss';
import About from '../../components/About';
import SearchPage from '../../components/Search Page';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ExampleExample: React.FC = () => {
  
  return( 
    <div className="main">
      <Navbar/>
      <SearchPage />
      <About/>
      <Footer/>
    </div>
    
    );
}

export default ExampleExample;