import React from 'react';
import PaginaDefault from '../../../components/PaginaDefault';
import { Link } from 'react-router-dom';

function CadastroVideo() {
  return(
    <PaginaDefault>
      
      <h1>Cadastro de Vídeo</h1>

      <Link to="/cadastro/categoria">
        Cadastro de Categoria
      </Link>

    </PaginaDefault>
  );
}

export default CadastroVideo;