import React, { useState, useEffect } from "react";

import './styles.scss';
import { Map, TileLayer, Marker } from 'react-leaflet';
import logo from '../../images/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import dataJSON from '../../data/neighborhoods.json';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

interface Neighborhoods {
    zone: number;
    neighborhood: any;
}
  
interface Neighborhood {
    id: number;
    name: string;
    location: [number, number];
}
  

const SearchPage: React.FC = () => {
    const [flag,setFlag] = useState(false);
    const [initialPosition, setInitialPosition] = useState<[number,number]>([0,0]);
    const [showMap, setShowMap] = useState(false);
    const [neighborhoods, setNeighborhoods] = useState<Neighborhood[]>([]);
    const [zone, setZone] = useState(0);
    const [showNeighborhood, setShowNeighborhoods] = useState(false);
  
    const data = dataJSON.neighborhoods;

    const searchZone = () => {
        data.map((item: Neighborhoods) => {
          if (item.zone === zone) {
            setNeighborhoods(item.neighborhood);
            console.log(neighborhoods);
          } else if (Number(zone) === 0) {
            setNeighborhoods([]);
          }
        })
    }
    
    useEffect(()=>{
        searchZone();
    },[zone]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;

        setInitialPosition([latitude, longitude]);
        });
    }, []);

    const handleSelect = () =>{
        setShowNeighborhoods(true);
        setShowMap(true);
    }

    return (
        <div id = "background">
            <Navbar bg="light" expand="lg">
                
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Sobre</Nav.Link>
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

            <div className={showMap ? "search active" : "search"}>
                <a>Map</a>
                    <img className = "logo" src = {logo}/>
                <a>Chat</a>

                <div className="d-flex">
                        <div >
                            <Form.Group className="form-search">
                                    <Form.Control 
                                        className ="form-control form-control-lg"
                                        as="select" 
                                        placeholder = "Selecione uma zona de bairros"
                                        onChange={(e: any) => {setZone(Number(e.target.value));handleSelect()}}
                                    >
                                        
                                        <option value={0} > Selecione um bairro e pressione o botão ao lado</option>
                                        {
                                            data.map((item: Neighborhoods) => (
                                        
                                            <option
                                                onClick={() => setShowMap(true)}
                                                key={item.zone}
                                                value={item.zone}
                                            >
                                                
                                                {`Zona de bairros ${item.zone}`}
                                            </option>
                                            ))
                                        }
                                        
                    
                                </Form.Control>
                            </Form.Group>
                            
                        </div> 

                        <div className="ml-3">
                            <Button 
                                onClick={()=>{console.log('oi')}}
                                id = "ir"
                                className="btn-lg pb-4" 
                                variant="primary" 
                                type="submit"
                            >
                                <SendOutlinedIcon style={{ fontSize: 28 }}/>
                            </Button>
                        </div> 
                    
                </div>
                
                {!showMap &&
                    <button 
                        onClick={()=> setShowMap(true)}
                    >
                        <h1>Mostrar no mapa</h1>
                    </button>
                }
                
            </div>
            
            {showMap &&
                <div>
                    <div className="map">
                        <Map center={initialPosition} zoom={11}>
                            <TileLayer
                                attribution='&amp;copy <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            {
                                neighborhoods.map((mark: Neighborhood) => (
                                <Marker position={mark.location} key={mark.id} />
                                ))
                            }

                            
                        </Map>

                    </div>
                    
                    <div className="button-hide">  
                        <button 
                            onClick={()=> setShowMap(false)}
                        >
                            <h1>Ocultar Mapa</h1>
                        </button> 
                    </div>

                </div>
            }

           

            {showNeighborhood &&
                <div style={{display:'flex', justifyContent:'center'}}>  
                    <div className = "neighborhoods">
                        {!!neighborhoods.length &&
                            neighborhoods.map((neighborhood: Neighborhood) => (
                                <Button className="botao-neighborhoods">
                                    {neighborhood.name}
                                </Button>
                            ))
                        }
                    </div>
                </div>
            }
            
            <Modal
                size="sm"
                show = {flag}
                onHide = {() => setFlag(false)}
            >
                
                
                <Modal.Title className = "title">Login</Modal.Title>
                
                <div className='form-container'>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" id="inputPassword2" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">

                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        
                        
                        <div className = "centro" >
                            <Button id="botao" className="btn-sl" variant="primary" type="submit">
                                Entrar
                            </Button>
                        </div>
                        
                    </Form>
                </div>
                
            </Modal>
            
        </div>
        
    );
    };


export default SearchPage;