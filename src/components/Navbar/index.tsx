import React, { useState } from 'react';
//importações
import './styles.scss';
import Navbar from 'react-bootstrap/Navbar';
import { useSnackbar } from 'notistack';
import Nav from 'react-bootstrap/Nav';
import ModalLogin from '../../components/Modal';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { removeUser } from '../../store/ducks/user/actions';
import Person from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

//interface
interface User {
    id: string;
    token: string;
    name: string;
    email: string;
    password: string;
}
  
const Header: React.FC = () => {
    //declarações de constatntes
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    const user: User = useSelector((state: RootStateOrAny) => state.user.user);
    const [flag,setFlag] = useState(false);

    //handleclose para modal
    const handleClose = () =>{
        setFlag(false);
    }

    //logica para scrollar para página após clique no header
    const scrollToNextPage = () => {
        document.querySelector('#second-page')?.scrollIntoView({behavior:'smooth'})
    };
    const scrollToFooter = () => {
        document.querySelector('.footer')?.scrollIntoView({behavior:'smooth'})
    };

    //dispatch para deslogar usuário
    const LogOut = () =>{
        dispatch(removeUser());
    }

    return (
        <div className="header-content">
            <Navbar bg="light" expand="lg">
                            
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={scrollToNextPage}>Sobre</Nav.Link>
                        <Nav.Link onClick={scrollToFooter}>Informações</Nav.Link>
                    </Nav>
                    <Nav>
                        
                        <button className="login-button" >
                            {user.token !== '' &&
                                <div className='row' onClick = {()=>{LogOut();enqueueSnackbar('Você foi deslogado.', { variant: "error" });}}>
                                    <Person color = "disabled" className="logout-icon"/>
                                    <Nav.Link>
                                        {user.name}
                                    </Nav.Link>
                                    <ExitToAppIcon color = "disabled" className="logout-icon"/>
                                </div>
                                
                                
                            }
                            {user.token == '' &&
                                <div className='row' onClick = {()=> setFlag(true)}>
                                    <Nav.Link onClick = {()=>LogOut()}>
                                        Entrar
                                    </Nav.Link>
                                <ExitToAppIcon color = "primary" className="login-icon"/>
                            </div>
                            }
                        </button> 
                        
                    </Nav>
                </Navbar.Collapse>

            </Navbar>

            <ModalLogin value = {flag} handleClose = {handleClose}/>
        </div>
    );
}

export default Header;