import React from 'react';

const Viagem = ({ nome, descricao }) => {
  return (
    <div className="viagem">
      <h2>{nome}</h2>
      <p>{descricao}</p>
    </div>
  );
};

export default Viagem;