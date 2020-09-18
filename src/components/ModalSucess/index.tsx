import React from 'react';

import './styles.scss';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import sending from '../../images/sending.svg';
import PersonIcon from '@material-ui/icons/Person';
import { grey } from '@material-ui/core/colors';

interface ModalProps {
    zone:number,
    id:number,
    neighborhood:string,
    message: string,
    value: boolean,
    handleClose(): any;
};

const ModalSucess: React.FC<ModalProps> = (props) => {
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
                <Row className="row-container">
                    <PersonIcon style={{ color:'grey', fontSize:35 }}/>
                    <p>Arthur MotherFocker</p>
                </Row>
                <p>
                    ID do bairro: {props.id}
                </p>
                <p>
                    Zona do bairro: {props.zone}
                </p>
                <p>
                    "{props.message}"
                </p>
            </div>
            
            <div className="button-container">
                <Button onClick={() => props.handleClose()} className="button-ok">Ok</Button>
            </div>
        </Modal.Body>
        
    </Modal>
    

  );
}

export default ModalSucess;