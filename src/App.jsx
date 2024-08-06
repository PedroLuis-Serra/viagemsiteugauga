// App.jsx
import React, { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Destinos from './destino';
import Contato from './pages/contato';
import './App.css';

function App() {
  const [paginaAtual, setPaginaAtual] = useState('Home');

  const renderPagina = () => {
    switch (paginaAtual) {
      case 'Home':
        return <Home />;
      case 'Destinos':
        return <Destinos />;
      case 'Contato':
        return <Contato />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header />
      <nav>
        <button onClick={() => setPaginaAtual('Home')}>Home</button>
        <button onClick={() => setPaginaAtual('Destinos')}>Destinos</button>
        <button onClick={() => setPaginaAtual('Contato')}>Contato</button>
      </nav>
      {renderPagina()}
      <Footer />
    </div>
  );
}

export default App;