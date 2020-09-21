import React from 'react';
//importações
import './styles.scss';
import image from '../../images/Dio.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer: React.FC = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="my-image">
                    <img src={image}/>
                </div>
                <div className="my-name">
                    <h2>Arthur Dionízio</h2>
                    <p>Graduando em Engenharia da Computação pela UFPB cursando o 4º período</p>
                </div>
                
                <div className="infos">
                    <h2>Contato</h2>
                    <p>arthurdaao@hotmail.com</p>
                    <p>(83) 9864-2444</p>

                </div>
                
                <div className="end">
                    <a target='__blank' href={'https://www.instagram.com/diionart/'} style={{color:'inherit'}}>
                        <InstagramIcon style={{fontSize:'40px'}} />
                    </a>
                    <a target='__blank' href={'https://github.com/dionart'} style={{color:'inherit'}}>
                        <GitHubIcon style={{fontSize:'36px'}}/>
                    </a>
                    <a target='__blank' href={'https://www.linkedin.com/in/arthur-dion%C3%ADzio-4162541ab/'} style={{color:'inherit'}}>
                        <LinkedInIcon style={{fontSize:'40px'}}/>
                    </a>
                    
                </div>
            
            
            </div>
            
            <div className="row mt-5">
                <div className="col copyright">
                <p className=""><small className="text-white-50">© 2020. Todos direitos reservados.</small></p>
                </div>
            </div>
        </div>
    </div>

  );
}

export default Footer;