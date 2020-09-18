import React from "react";

import logo from '../../images/logo.png'
import './styles.scss';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

interface ModalProps {
  value: boolean,
  handleClose(): any;
};

const ModalLogin: React.FC<ModalProps> = (props) => {
  
  return (
        <Modal
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
                          <Form.Control type="email" placeholder="Email" id="inputPassword2" />
                          <Form.Text className="text-muted">
                          Nunca compartilharemos seu email com ninguém.
                          </Form.Text>
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">

                          <Form.Control type="password" placeholder="Senha" />
                      </Form.Group>
                      
                      
                      <div>
                          <Button id="botao" className="btn-sl" variant="primary" type="submit">
                              Entrar
                          </Button>
                      </div>
                      
                  </Form>
              </div>
              
          </Modal>
        
  );
};

export default ModalLogin;



