import React, { useState, useEffect } from 'react';
import Lista from './Lista'; 

function App() {
  const [items, setItems] = useState([]); 

  useEffect(() => {
    // Simulação de carregamento de dados
    setTimeout(() => {
      setItems(['Item 1', 'Item 2', 'Item 3']);
    }, 2000);
  }, []);

  return (
    <div>
      <h1>Minha Lista de Itens</h1>
      <Lista items={items} /> 
    </div>
  );
}

export default App;
/* LIsta de itens simula o carregamento de dados de uma lista atualizando o estado items após um atraso de 2 segundos. Após o carregamento ele passa o estado items como propriedade para o componente Lista, que é responsável por exibir os itens na tela. */