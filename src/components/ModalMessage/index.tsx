import React, {useState} from 'react';
//importações
import './styles.scss';
import sent from '../../images/sent-message.svg';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ModalSuccess from '../ModalSuccess';
import { useSnackbar } from 'notistack';

//interface
interface ModalProps {
    zone:number,
    id: number,
    name: string,
    value: boolean,
    handleClose(): any;
};
  
const ModalMessage: React.FC<ModalProps> = (props) => {
    //declarações de constantes
    const [message,setMessage] = useState('');
    const [showSucess, setShowSucess] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const [messageAux, setMessageAux] = useState('');

    //handleClose para modal
    const handleClose = () =>{setShowSucess(false)};

    //logica para não permitir mensagem em branco
    const handleSubmit = () => {
        if(message !== ''){
            setShowSucess(true);
            setMessageAux(message);
            setMessage('');
            props.handleClose();
        }else{
            enqueueSnackbar('Sua avaliação não pode ser um campo em branco',{variant: 'error'});
        }
        
    }

    return (
        <>
            <Modal
                className="modal-container"
                show={props.value}
                size="xl"
                onHide = {()=> props.handleClose()}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Row className="row-container">
                    <div className="image-modal">
                        <img src={sent}/>
                    </div>

                    <div className="input-modal">
                        <Modal.Body>
                            <div className="text-modal">
                                <h4>Envie seu feedback sobre {props.name}</h4>
                            </div>

                            <div className="description-modal">
                                <p>Sua análise poderá ajudar bairros a evoluir e melhorar a qualidade de vida de seus moradores</p>
                            </div>

                            <div className="form-control-container">
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control className="text-area" as="textarea" rows={6} placeholder="Escreva aqui" value={message} onChange={(e) => {setMessage(e.target.value)}} />
                                </Form.Group>
                            </div>
                        </Modal.Body>
                        <div className="send-container">
                            
                            <Button onClick={()=> props.handleClose()} className="goback-button">Cancelar</Button>
                            
                            <Button onClick={()=> handleSubmit()} className="send-button">Enviar</Button>
                            
                        </div>
                    </div>
                </Row>
                
            </Modal>

            <ModalSuccess zone={props.zone} id={props.id} neighborhood={props.name} message={messageAux} value={showSucess} handleClose={handleClose} />
        
        </>


    );
}

export default ModalMessage;