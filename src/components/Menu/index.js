import React from 'react';
import Logo from './../../assets/img/Logo.png';
import './Menu.css';
import {Link} from 'react-router-dom';
import Button from './../Button';

function Menu() {
  return(
    <nav className='Menu'>

      <a href="/">
      <img src={Logo} alt='PebaFlix Logo' className='Logo'/>
      </a>

      <Button as={Link} to="/cadastro/video" className="ButtonLink">
        Novo Vídeo
      </Button>

    </nav>
  );
}

export default Menu;