import React, { useState } from 'react';

import './styles.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ModalLogin from '../../components/Modal';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Header: React.FC = () => {

    const [flag,setFlag] = useState(false);
    const handleClose = () =>{
        setFlag(false);
    }
    const scrollToNextPage = () => {
        document.querySelector('#second-page')?.scrollIntoView({behavior:'smooth'})
    };
    return (
        <div className="header-content">
            <Navbar bg="light" expand="lg">
                            
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={scrollToNextPage}>Sobre</Nav.Link>
                    </Nav>
                    <Nav>
                        <button className="login-button">
                            <div className='row'>
                                <Nav.Link onClick = {()=> setFlag(true)} href="#deets">Entrar</Nav.Link>
                                <ExitToAppIcon color = "primary" className="login-icon"/>
                            </div>
                        </button> 
                    </Nav>
                </Navbar.Collapse>

            </Navbar>

            <ModalLogin value = {flag} handleClose = {handleClose}/>
        </div>
    );
}

export default Header;