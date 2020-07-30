import React from 'react';
import { Link } from 'react-router-dom';

function erro404() {
  return(
    <div>
      <h1>Página não encontrada (erro: 404)
        <Link to="/">
        <p>Clique aqui para voltar para a Home</p>
        </Link>
      </h1>
    </div>
  );
}

export default erro404;