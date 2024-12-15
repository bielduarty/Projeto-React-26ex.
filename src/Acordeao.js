import React, { useState } from 'react';

function Acordeao() {
  s
  const [abertos, setAbertos] = useState({});

  
  const toggleAcordeao = (index) => {
    setAbertos(prev => ({
      ...prev,
      [index]: !prev[index] 
    }));
  };

  
  const secoes = [
    { titulo: 'Seção 1', conteudo: 'Conteúdo da Seção 1' },
    { titulo: 'Seção 2', conteudo: 'Conteúdo da Seção 2' },
    { titulo: 'Seção 3', conteudo: 'Conteúdo da Seção 3' }
  ];

  return (
    <div>
      {secoes.map((secao, index) => (
        <div key={index}>
          <button onClick={() => toggleAcordeao(index)}>
            {abertos[index] ? 'Esconder' : 'Mostrar'} {secao.titulo}
          </button>
          {abertos[index] && <p>{secao.conteudo}</p>}
        </div>
      ))}
    </div>
  );
}

export default Acordeao;
/* Resultado final O componente Acordeao exibe uma lista de seções interativas que podem ser expandidas ou recolhidas ao clicar em um botão. Ele usa useState para gerenciar o estado de visibilidade de cada seção, tornando-o dinâmico e reutilizável. */