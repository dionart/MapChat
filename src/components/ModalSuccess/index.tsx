import React from 'react';
//importações
import './styles.scss';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import sending from '../../images/sending.svg';
import { useSelector, RootStateOrAny } from 'react-redux';

//interfaces
interface ModalProps {
    zone:number,
    id:number,
    neighborhood:string,
    message: string,
    value: boolean,
    handleClose(): any;
};

interface User {
    id: string;
    token: string;
    name: string;
    email: string;
    password: string;
}

const ModalSuccess: React.FC<ModalProps> = (props) => {
    //selector para pegar dados do usuário logado
    const user: User = useSelector((state: RootStateOrAny) => state.user.user);
    
    return (
        <Modal
            show={props.value}
            onHide={()=> props.handleClose()}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            
            <div className="image-container">
                <img src={sending}/>
            </div>
            
            <Modal.Body>
                <div className="text-container">
                    <h4>Sua análise de {props.neighborhood} foi enviada!</h4>
                    
                    <Row>
                        <div style = {{width:'50%'}}>
                            <p>Usuário: {user.name}</p>
                            <p>
                                ID do bairro: {props.id}
                            </p>
                            <p>
                                Zona do bairro: {props.zone}
                            </p>
                        </div>

                        
                        <div className="borderP">
                            <p>
                                "{props.message}"
                            </p>
                        </div>
                        
                    </Row>
                
                </div>
                
                <div className="button-container">
                    <Button onClick={() => props.handleClose()} className="button-ok">Ok</Button>
                </div>
            </Modal.Body>
            
        </Modal>
    );
}

export default ModalSuccess;