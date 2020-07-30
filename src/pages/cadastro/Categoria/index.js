import React from 'react';
import PaginaDefault from '../../../components/PaginaDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  return(
    <PaginaDefault>
      <h1>Cadastro de Categoria</h1>

      <Link to="/">
        Voltar para a Home
      </Link>
    </PaginaDefault>
  );
}

export default CadastroCategoria;