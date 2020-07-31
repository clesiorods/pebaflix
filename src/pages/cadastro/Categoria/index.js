import React from 'react';
import PaginaDefault from '../../../components/PaginaDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  return(
    <PaginaDefault>
      <h1>Cadastro de Categoria</h1>

      <Link to="/">
        <form>
          <label>
            Nome da Categoria: <input type="text"/>
          </label>
          <button> Cadastrar </button>
        </form>

      </Link>
    </PaginaDefault>
  );
}

export default CadastroCategoria;