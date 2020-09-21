//importações
import React, {useState} from "react";
import {environment} from '../../environment/environment';
import logo from '../../images/logo.png'
import './styles.scss';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSnackbar } from 'notistack';
import { checkAuth } from '../../services/validation';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../store/ducks/user/actions';

//interface
interface ModalProps {
  value: boolean,
  handleClose(): any;
};

const ModalLogin: React.FC<ModalProps> = (props) => {
    //declarações de constantes
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //função para login de usuário fixo
    const Login = () =>{
        if(email == 'arthur.dionizio@lavid.ufpb.br' && password == 'autonodev'){
            //cria objeto de usuário
            const user ={
                id:'1',
                token:'LoggedIn',
                email:email,
                name:'Dionízio',

            }
            
            //checa se email e senha são validos
            const ValidEmail = checkAuth('email', email);
            const ValidPassword = checkAuth('password', password);
            if(ValidEmail && ValidPassword){
                //seta token e usuário para permanecer logado após sair da página
                localStorage.setItem(environment.REACT_APP_LOCAL_STORAGE_USER, 'loggedIn'); 
                localStorage.setItem("loggedUser", JSON.stringify({ user }));
                dispatch(updateUser({ user }));
                enqueueSnackbar('Você foi logado com sucesso!.', { variant: "success" });
                props.handleClose();
            }else{
                enqueueSnackbar('Email ou senha não válidos.', { variant: "error" });
            }
        }else{
            enqueueSnackbar('Falha ao autenticar, verifique as informações e tente novamente', { variant: "error" });
        }
    }
        

    return (
        <Modal  
                centered
                size="sm"
                show = {props.value}
                onHide = {() => props.handleClose()}
            >
                <div className="logo-container">
                    <a>Map</a>
                        <img className = "logo" src = {logo}/>
                    <a>Chat</a>
                </div>

                <div className='form-container'>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control 
                                value={email}
                                onChange = {(e)=>setEmail(e.target.value)}
                                type="email" 
                                placeholder="Email" 
                                id="inputPassword2"
                            />
                            <Form.Text className="text-muted">
                            Nunca compartilharemos seu email com ninguém.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">

                            <Form.Control 
                                value={password}
                                onChange = {(e)=>setPassword(e.target.value)}
                                type="password" 
                                placeholder="Senha" 
                            />
                        </Form.Group>
                        
                        
                        <div>
                            <Button 
                                onClick= {()=> Login()}
                                id="botao" 
                                className="btn-sl" 
                                variant="primary" 
                                type="submit"
                            >
                                Entrar
                            </Button>
                        </div>
                        
                        
                    </Form>
                </div>
                
            </Modal>
        
    );
};

export default ModalLogin;



