import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import Destinos from '../destino';
import FormDestino from '../formDestino';
import Viagem from './viagens';

const Paises = () => {
    const [destinos, setDestinos] = useState([
        { nome: 'Paris', descricao: 'A cidade do amor.' },
        { nome: 'Nova York', descricao: 'A cidade que nunca dorme.' },
        { nome: 'Tóquio', descricao: 'A capital do Japão.' }
      ]);
    
      const adicionarDestino = (novoDestino) => {
        setDestinos([...destinos, novoDestino]);
      };
    
      return (
        <div className="Paises">
          <FormDestino adicionarDestino={adicionarDestino} />
            {destinos.map((destino, index) => (
                <Viagem key={index} nome={destino.nome} descricao={destino.descricao} />
            ))}
        </div>
      );
};

export default Paises;