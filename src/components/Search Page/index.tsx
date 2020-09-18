import React, { useState, useEffect } from "react";

import './styles.scss';
import { Map, TileLayer, Marker } from 'react-leaflet';
import logo from '../../images/logo.png';
import dataJSON from '../../data/neighborhoods.json';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ModalMessage from '../../components/ModalMessage';
import { useSnackbar } from 'notistack';
import SearchIcon from '@material-ui/icons/Search';

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
    const [ModalChoice, setModalChoice] = useState(false);
    const [initialPosition, setInitialPosition] = useState<[number,number]>([0,0]);
    const [showMap, setShowMap] = useState(false);
    const [neighborhoods, setNeighborhoods] = useState<Neighborhood[]>([]);
    const [zone, setZone] = useState(0);
    const [neighborhoodId, setNeighborhoodId] = useState(0);
    const [showNeighborhood, setShowNeighborhoods] = useState(false);
    const [choice, setChoice] = useState<string>('');
    const { enqueueSnackbar } = useSnackbar();
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

    const handleModalChoice = (neighborhood:string) =>{
        setModalChoice(true);
        setChoice(neighborhood);
    }

    const handleClose = () =>{setModalChoice(false)}

    const handleSelect = () =>{
        setChoice('');
        setShowNeighborhoods(true);
        setShowMap(true);
    }

    return (
        <div id = "background">
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
                                        
                                        <option value={0} > Selecione um bairro das zonas abaixo</option>
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
                                style={{boxShadow:"none"}}
                                id = "ir"
                                className="btn-lg pb-4" 
                                variant="primary" 
                                type="submit"
                            >
                                <SearchIcon style={{ fontSize: 28 }}/>
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
                                <Button 
                                    onClick={()=>{handleModalChoice(neighborhood.name);setNeighborhoodId(neighborhood.id)}}
                                    className="botao-neighborhoods"
                                >
                                    {neighborhood.name}
                                </Button>
                            ))
                        }
                    </div>
                </div>
            }
        
            <ModalMessage zone={zone} id={neighborhoodId} name={choice} value={ModalChoice} handleClose={handleClose}/>
        </div>
        
    );
    };


export default SearchPage;